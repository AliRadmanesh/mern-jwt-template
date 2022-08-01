import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      const messageData = {
        from: "Ali Radmanesh <ali.radmanesh1995@gmail.com>",
        to: "ali.radmanesh1995+test1@gmail.com",
        subject: "Hello",
        text: "Testing some Mailgun awesomeness!",
      };

      await sendEmail(messageData);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
};
