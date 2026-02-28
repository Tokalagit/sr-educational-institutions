const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

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

app.post("/send-enrolment", async (req, res) => {
  const {
    studentName, dob, gender, motherTongue, nationality, studentAadhar,
    mobileNumber, email,
    fatherName, fatherAadhar, fatherOccupation,
    motherName, motherAadhar, motherOccupation,
    course, advancedCourse, medium, secondLanguage, type,
    sscHallTicket, sscGpa, lastStudied
  } = req.body;

  console.log("New Enrolment Received:", req.body);

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
      from: `"SR Enrolment System" <${process.env.EMAIL_USER}>`,
      to: "tokalatechnologies@gmail.com",
      replyTo: email || undefined,
      subject: `New Enrolment — ${studentName} | ${mobileNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #7c2d12; color: white; padding: 24px 32px;">
            <h2 style="margin:0; font-size:22px; text-transform:uppercase; letter-spacing:2px;">New Enrolment Application</h2>
            <p style="margin:6px 0 0; font-size:12px; opacity:0.8;">S.R. Junior College — Digital Submission</p>
          </div>
          <div style="padding: 28px 32px; background: #fff;">

            <h3 style="color:#7c2d12; border-bottom:2px solid #fee2e2; padding-bottom:8px; text-transform:uppercase; font-size:13px; letter-spacing:1px;">👤 Student Details</h3>
            <table style="width:100%; border-collapse:collapse; font-size:14px; margin-bottom:24px;">
              <tr><td style="padding:6px 0; color:#555; width:45%"><b>Full Name</b></td><td>${studentName}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Date of Birth</b></td><td>${dob}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Gender</b></td><td>${gender}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Mother Tongue</b></td><td>${motherTongue}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Nationality</b></td><td>${nationality}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Student Aadhar</b></td><td>${studentAadhar}</td></tr>
              <tr style="background:#fff7ed;"><td style="padding:8px 0; color:#c2410c;"><b>📱 Mobile Number</b></td><td style="color:#c2410c; font-weight:bold;">${mobileNumber}</td></tr>
              <tr style="background:#fff7ed;"><td style="padding:8px 0; color:#c2410c;"><b>📧 Email</b></td><td style="color:#c2410c; font-weight:bold;">${email || 'Not provided'}</td></tr>
            </table>

            <h3 style="color:#7c2d12; border-bottom:2px solid #fee2e2; padding-bottom:8px; text-transform:uppercase; font-size:13px; letter-spacing:1px;">👨‍👩‍👦 Parent / Guardian Details</h3>
            <table style="width:100%; border-collapse:collapse; font-size:14px; margin-bottom:24px;">
              <tr><td style="padding:6px 0; color:#555; width:45%"><b>Father's Name</b></td><td>${fatherName}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Father's Aadhar</b></td><td>${fatherAadhar}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Father's Occupation</b></td><td>${fatherOccupation}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Mother's Name</b></td><td>${motherName}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Mother's Aadhar</b></td><td>${motherAadhar}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Mother's Occupation</b></td><td>${motherOccupation}</td></tr>
            </table>

            <h3 style="color:#7c2d12; border-bottom:2px solid #fee2e2; padding-bottom:8px; text-transform:uppercase; font-size:13px; letter-spacing:1px;">🎓 Academic Selection</h3>
            <table style="width:100%; border-collapse:collapse; font-size:14px; margin-bottom:24px;">
              <tr><td style="padding:6px 0; color:#555; width:45%"><b>Course Stream</b></td><td>${course}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Advanced Coaching</b></td><td>${advancedCourse || 'None'}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Medium</b></td><td>${medium}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Second Language</b></td><td>${secondLanguage}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Student Type</b></td><td>${type}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>SSC Hall Ticket No.</b></td><td>${sscHallTicket}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>SSC GPA / Grade</b></td><td>${sscGpa}</td></tr>
              <tr><td style="padding:6px 0; color:#555;"><b>Institution Last Studied</b></td><td>${lastStudied}</td></tr>
            </table>

          </div>
          <div style="background:#f9fafb; padding:16px 32px; text-align:center; font-size:11px; color:#aaa; text-transform:uppercase; letter-spacing:1px;">
            S.R. Educational Institutions — Digital Enrolment System
          </div>
        </div>
      `,
    });

    res.status(200).json({ message: "Enrolment submitted successfully" });
  } catch (error) {
    console.error("Enrolment Email Error:", error);
    res.status(500).json({ error: "Failed to send enrolment email" });
  }
});

app.listen(5000, '0.0.0.0', () => {
  console.log("Server running on port 5000");
});

