import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_USER,
    pass: process.env.MY_PASS,
  },
});

transport.verify((error) => {
  if (error) {
    console.error("❌ SMTP error:", error.message);
  } else {
    console.log("✅ SMTP ready");
  }
});

export async function sendMail(to, text) {
  const info = await transport.sendMail({
    from: process.env.MY_USER,
    to,
    subject: "Your OTP Code",
    text,
  });

  console.log("📧 Mail sent:", info.response);
}
