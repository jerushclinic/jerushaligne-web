const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // 1. CORS & Methods handling
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, treatment } = req.body;

  // 2. Validation
  if (!name || !phone || !email || !treatment) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // 3. Environment Variables (Vercel-la irundhu edukkum)
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error("Vercel Config Error: GMAIL_USER or GMAIL_PASS is missing.");
    return res.status(500).json({ error: "Vercel Config Error: Check Environment Variables" });
  }

  // 4. Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.trim(),
      pass: pass.trim(), // Andha 16-digit App Password
    },
  });

  try {
    // 5. Send Mail
    await transporter.sendMail({
      from: `"JerushaLine Website" <${user}>`,
      to: user, 
      subject: `New Appointment: ${name} - ${treatment}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0070f3;">New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Treatment:</strong> ${treatment}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Nodemailer Error:", err.message);
    
    if (err.message.includes("EAUTH")) {
      return res.status(500).json({ error: "Email Authentication Failed. Check App Password." });
    }

    return res.status(500).json({ error: "Failed to send email. " + err.message });
  }
};