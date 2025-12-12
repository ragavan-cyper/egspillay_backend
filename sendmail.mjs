import nodemailer from "nodemailer";

import dotenv from "dotenv"
dotenv.config()

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_USER,
    pass: process.env.MY_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});



export async function sendMail(to, text) {
  try {
    await transport.sendMail({
      from: process.env.MY_USER,   // FIXED
      to: to,                      // User email
      subject: "Your OTP Code",
      text: text,
    });
  } catch (error) {
    console.error("❌ Mail send failed:", error);
  }
}
