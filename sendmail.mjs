import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // apikey
    pass: process.env.SMTP_PASS, // Brevo SMTP key
  },
});

transport.verify((err) => {
  if (err) {
    console.error("❌ SMTP error:", err);
  } else {
    console.log("✅ SMTP READY (Brevo)");
  }
});

export async function sendMail(to, text) {
  const info = await transport.sendMail({
    from: "no-reply@egspillay.com",
    to,
    subject: "Your OTP Code",
    text,
  });

  console.log("📧 Mail sent:", info.response);
}
