const nodemailer = require("nodemailer");
require("dotenv").config();

let transporterSingleton = null;

const getTransporter = () => {
  if (transporterSingleton) return transporterSingleton;

  transporterSingleton = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });
  return transporterSingleton;
};

const send = (mailData) => {
  const transport = getTransporter();

  const mailDefaults = {
    from: "default@spamland.com",
    to: process.env.SMTP_SENDIN_USER,
    subject: "New message from contact form",
    text: `N/A`,
    html: `<h2>Message</h2><p>N/A</p>`,
  };
  return transport.sendMail({ ...mailDefaults, ...mailData });
};

module.exports = { send };
