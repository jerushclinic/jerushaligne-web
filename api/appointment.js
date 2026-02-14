const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, treatment } = req.body;

    // Validation
    if (!name || !phone || !email || !treatment) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check env vars
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      console.error("Missing env vars");
      return res.status(500).json({ error: "Server config error" });
    }

    // Create transporter with explicit settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: user.trim(),
        pass: pass.trim(),
      },
      tls: {
        rejectUnauthorized: false // Vercel-la idha add panunga
      }
    });

    // Verify connection first
    await transporter.verify();
    console.log("SMTP Connection verified");

    // Send mail
    const info = await transporter.sendMail({
      from: `"JerushaLine Website" <${user}>`,
      to: user,
      subject: `New Appointment: ${name} - ${treatment}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #0070f3;">New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Treatment:</strong> ${treatment}</p>
        </div>
      `,
    });

    console.log("Email sent:", info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });

  } catch (err) {
    console.error("Detailed Error:", err);
    return res.status(500).json({ 
      error: "Email failed", 
      details: err.message 
    });
  }
};