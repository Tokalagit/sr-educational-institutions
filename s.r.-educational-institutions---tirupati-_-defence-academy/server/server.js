const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// app.use(cors());
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, mobile, course, message } = req.body;

  console.log("Received:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Email failed" });
  }
});
console.log("Loaded USER:", process.env.EMAIL_USER);
console.log("Loaded PASS length:", process.env.EMAIL_PASS?.length);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

