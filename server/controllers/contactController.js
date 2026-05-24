import { Resend } from "resend";
import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    // 1. Save to MongoDB
    await Contact.create({ name, email, subject, message });

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 2. Notify YOU — new message alert
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",   // free tier: use this until you add your domain
      to: process.env.MY_EMAIL,                     // your Gmail
      reply_to: email,                              // clicking Reply goes to sender
      subject: subject
        ? `[Portfolio] ${subject} — from ${name}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;background:#f9f9f9;border-radius:10px;overflow:hidden;">
          <div style="background:#00E5A0;padding:20px 28px;">
            <h2 style="margin:0;color:#080B10;font-size:1.2rem;">New Portfolio Message</h2>
          </div>
          <div style="padding:28px;color:#222;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:6px 0;color:#666;font-size:0.85rem;width:80px;">Name</td>
                <td style="padding:6px 0;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#666;font-size:0.85rem;">Email</td>
                <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#00b37e;">${email}</a></td>
              </tr>
              ${subject ? `<tr>
                <td style="padding:6px 0;color:#666;font-size:0.85rem;">Subject</td>
                <td style="padding:6px 0;">${subject}</td>
              </tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:18px 0;" />
            <p style="white-space:pre-wrap;line-height:1.7;color:#333;">${message}</p>
          </div>
          <div style="padding:14px 28px;background:#f0f0f0;font-size:0.75rem;color:#999;">
            Sent from your portfolio · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });

    // // 3. Auto-reply to the sender
    // await resend.emails.send({
    //   from: "Ayush Poddar <onboarding@resend.dev>",  // same until domain added
    //   to: email,
    //   subject: "Thanks for reaching out!",
    //   html: `
    //     <div style="font-family:sans-serif;max-width:560px;margin:auto;">
    //       <h2 style="color:#00b37e;">Hey ${name} 👋</h2>
    //       <p style="color:#333;line-height:1.7;">
    //         Thanks for getting in touch! I've received your message and will
    //         get back to you within <strong>24 hours</strong>.
    //       </p>
    //       <p style="color:#333;line-height:1.7;">
    //         Check out my projects on
    //         <a href="https://github.com/ayushpoddar16" style="color:#00b37e;">GitHub</a> or
    //         connect on <a href="https://www.linkedin.com/in/ayush-poddar-780b37251" style="color:#00b37e;">LinkedIn</a>.
    //       </p>
    //       <p style="color:#666;margin-top:2rem;">— Ayush Poddar<br/>Full Stack MERN Developer</p>
    //     </div>
    //   `,
    // });

    return res.status(200).json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try emailing directly.",
    });
  }
};