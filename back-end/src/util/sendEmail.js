import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

export const sendEmail = ({ from, to, subject, text }) => {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });
  const messageData = { from, to, subject, text };
  return client.messages.create(DOMAIN, messageData);
};
