import React from "react";

const Contact = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState<null | boolean>(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formState),
    });
    if (res.ok) {
      setSent(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }
    setTimeout(() => {
      setSent(null);
      setSending(false);
    }, 5000);
  };

  return (
    <div className="p-2 md:p-48">
      <div className="p-4 border border-slate-300 rounded">
        <h4 className="text-3xl">Contact Us</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-2xl">
          <input
            className="border border-slate-300 outline-none rounded"
            name="name"
            value={formState.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border border-slate-300 outline-none rounded"
            name="email"
            value={formState.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="border border-slate-300 outline-none rounded h-48"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <br />
          <button disabled={sending} type="submit">
            {sending ? "Sending" : "Send"}
          </button>
        </form>
        {sent === true && <p className="text-xl">Message sent!</p>}
      </div>
    </div>
  );
};

export default Contact;
