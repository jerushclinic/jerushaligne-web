import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, treatment } = req.body;

  // 2. Validate input fields
  if (!name || !phone || !email || !treatment) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // 3. Environment Variables Safety Check (IMPORTANT)
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error("Vercel Config Error: GMAIL_USER or GMAIL_PASS is missing in Environment Variables.");
    return res.status(500).json({ error: "Server configuration error. Please check environment variables." });
  }

  // 4. Create Transporter with Explicit Settings
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.trim(),
      pass: pass.trim(), // Remove accidental spaces
    },
  });

  try {
    // 5. Send Mail
    await transporter.sendMail({
      from: `"JerushaLine Website" <${user}>`,
      to: user, // Sends the notification to your own email
      subject: `New Appointment: ${name} - ${treatment}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0070f3;">New Appointment Request</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Treatment:</strong> ${treatment}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">Sent from JerushaLine Website Contact Form</p>
        </div>
      `,
    });

    // 6. Success Response
    return res.status(200).json({ success: true });

  } catch (err) {
    // 7. Error Logging for Vercel
    console.error("Nodemailer Detail Error:", err);
    
    // Check for common Gmail errors
    if (err.message.includes("EAUTH")) {
      return res.status(500).json({ error: "Email Authentication Failed. Check App Password." });
    }

    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}