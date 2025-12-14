import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,         
  secure: false,      
  auth: {
    user: process.env.MY_USER,
    pass: process.env.MY_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


transport.verify((error) => {
  if (error) {
    console.error("❌ SMTP VERIFY FAILED:", error);
  } else {
    console.log("✅ SMTP SERVER READY");
  }
});

export async function sendMail(to, text) {
  console.log("📨 Sending mail to:", to);

  const info = await transport.sendMail({
    from: process.env.MY_USER,
    to,
    subject: "Your OTP Code",
    text,
  });

  console.log("📧 Mail sent:", info.response);
}
