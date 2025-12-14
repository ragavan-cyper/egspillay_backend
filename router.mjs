router.post("/user/signup", async (req, res) => {
  let { name, email } = req.body;
  email = email.toLowerCase();

  try {
    const exstinguser = await User.findOne({ email });
    if (exstinguser) {
      return res.status(409).json("Account already created");
    }

    // 🔥 IMPORTANT FIX
    await Otp.deleteOne({ email });

    const otp = generate();
    const hashedotp = await bcrypt.hash(otp.toString(), 10);

    await Otp.create({
      email,
      otp: hashedotp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendMail(email, `Your OTP is: ${otp}`);
    return res.status(200).json("Otp successfully sent");

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json("Server error");
  }
});
 export default router