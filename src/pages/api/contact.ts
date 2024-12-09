import type { NextApiRequest, NextApiResponse } from "next";
import { ContactEmailTemplate } from "../../components/ContactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body);
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing name, email, or message" });
  }

  const { data, error } = await resend.emails.send({
    from: "Joe & Selah <info@joeandselah.co>",
    to: [email],
    cc: ["info@joeandselah.co"],
    reply_to: [email],
    bcc: ["selahlynnn@gmail.com", "joehdodd@gmail.com"],
    subject: "Joe & Selah Contact",
    react: ContactEmailTemplate({ firstName: name, email, message }),
    text: "Hello!",
  });

  if (error || !data) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default send;
