import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  // Created here so process.env is guaranteed loaded by dotenv.config() in server.js
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  // Destructure all four fields the frontend sends
  const { name, email, subject, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    // 1. Save to MongoDB
    await Contact.create({ name, email, subject, message });

    // 2. Send notification email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,                          // so you can reply directly to sender
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
            Sent from your portfolio contact form · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try emailing directly.",
    });
  }
};