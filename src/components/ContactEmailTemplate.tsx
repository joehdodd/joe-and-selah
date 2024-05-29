import * as React from "react";

interface ContactEmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <p>Thanks for contacting us!</p>
    <p>
      We received your message from {email} and this is a receipt of that
      contact. We look forward to talking more!
    </p>
    <p>Here is a copy of your message:</p>
    <p>{message}</p>
    <p>Thanks again!</p>
  </div>
);
