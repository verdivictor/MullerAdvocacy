import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!
  }
});

app.post("/api/send-email", async (req, res) => {
  console.log(process.env.SMTP_USER)
  console.log(process.env.SMTP_HOST)
  console.log(process.env.SMTP_PASS)
  console.log(process.env.SMTP_PORT)
  console.log(process.env.EMAIL_DESTINATION)

  try {
    const { name, email, phone, details } = req.body;
    await transporter.sendMail({
      from: `"Estimates" <${process.env.SMTP_USER}>`,
      to: `${process.env.EMAIL_DESTINATION}`,
      subject: "New quote request",
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telephone:</strong> ${phone}</p>
        <p><strong>Details:</strong><br/>${details}</p>
      `
    });
    return res.status(200).json({ message: "E-mail successfully sent!" });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Error sending e-mail" });
  }
});

const distPath = path.resolve(__dirname, "dist");
app.use(express.static(distPath));

app.get(/.*/, (_, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

const port = Number(process.env.API_PORT) || 4000;
app.listen(port, () => {
  console.log(`🚀 API rodando em http://localhost:${port}`);
});
