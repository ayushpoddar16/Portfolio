import { Resend } from "resend";
import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    // 1. Save to MongoDB first (this always works)
    console.log("Contact request received:", { name, email, subject, message });
    await Contact.create({ name, email, subject, message });

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 2. Send notification email to YOU
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // free tier sender — do NOT change
      to: ["ayush16373@gmail.com"], // hardcoded — to field must be an array
      reply_to: email,
      subject: subject
        ? `[Portfolio] ${subject} — from ${name}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;background:#f9f9f9;border-radius:10px;overflow:hidden;">
          <div style="background:#00E5A0;padding:20px 28px;">
            <h2 style="margin:0;color:#080B10;font-size:1.2rem;">New Portfolio Message</h2>
          </div>
          <div style="padding:28px;color:#222;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:18px 0;" />
            <p style="white-space:pre-wrap;line-height:1.7;">${message}</p>
          </div>
          <div style="padding:14px 28px;background:#f0f0f0;font-size:0.75rem;color:#999;">
            Sent from your portfolio · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });

    // Log the actual Resend response for debugging
    if (error) {
      console.error("Resend error details:", JSON.stringify(error));
      // Still return success since message is saved to DB
      return res.status(200).json({
        success: true,
        message:
          "Message saved! Email delivery had an issue but your message is received.",
      });
    }

    console.log("Email sent successfully, id:", data?.id);
    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error(
      "Contact form error full:",
      err?.message,
      err?.response?.data || err,
    );
    return res.status(500).json({
      success: false,
      message:
        err?.response?.data?.message ||
        err.message ||
        "Server error. Please try emailing directly.",
    });
  }
};
