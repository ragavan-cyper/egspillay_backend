import axios from "axios";

export async function sendMail(to, text) {
  try {
    const res = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "EGS Pillay",
          email: "ragavanragavan906@gmail.com", 
        },
        to: [{ email: to }],
        subject: "Your OTP Code",
        textContent: text,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("📧 Mail sent via Brevo API:", res.data);
  } catch (error) {
    console.error(
      "❌ Brevo API mail failed:",
      error.response?.data || error.message
    );
    throw error;
  }
}
