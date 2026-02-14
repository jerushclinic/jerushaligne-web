const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // CORS Headers
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

    // Environment Variables
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      console.error("Missing env vars:", { user: !!user, pass: !!pass });
      return res.status(500).json({ error: "Server config error" });
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user.trim(),
        pass: pass.trim(),
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"JerushaLine Website" <${user}>`,
      to: user,
      subject: `New Appointment: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #f59e0b;">New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Treatment:</strong> ${treatment}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Email Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
};