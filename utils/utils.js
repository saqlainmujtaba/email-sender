import { configDotenv } from "dotenv";
import { createTransport } from "nodemailer";

configDotenv();

createTransport;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

console.log(
    `SMTP_HOST: ${SMTP_HOST}, SMTP_PORT: ${SMTP_PORT}, SMTP_USER: ${SMTP_USER}`
);

// Create a test account or replace with real credentials.

export const sendMail = async (email,message,subject) => {
  const transporter = createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
  transporter
    .verify()
    .then(console.log(`transporter working`))
    .catch(console.error());
  // Wrap in an async IIFE so we can use await.
  (async () => {
    const info = await transporter.sendMail({
      from: "Saqlain Mujtaba   ",
      to: `${email}`,
      subject: `${subject}`,
      text: "Hello world?", // plain‑text body
      html: `<b>${message? " Thank you for your message <br>  "+ message +" <br> I recieved it" :"Thank you for contacting Saqlain mujtaba. I will contact you soon"}</b>`, // HTML body
    });
 

    console.log(`"Message sent: to "${email}`, info.messageId);
    // console.log(`"Message sent: to me" successfully`, infome.messageId);
  })();
};
