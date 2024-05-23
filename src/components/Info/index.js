import React from "react";

const Info = () => {
  return (
    <div>
      <h2 className="text-[64px] text-italic text-center mb-0">Hello!</h2>
      <p className="text-[40px] text-center mt-[-1.5rem] mb-4">We&apos;re glad that you found us!</p>
      <hr/>
      <p className="text-[28px] text-center mb-2">
        We are Chattanooga wedding photographers specializing in intimate,
        documentary style photography for engagements and weddings. We love
        capturing those intimate details of your wedding day that will remind
        you of how special it really was.
      </p>
      <p className="text-[28px] text-center mb-2">
        Interested in choosing us as your Chattanooga wedding photographers? Send
        an email to <a href="mailto:info@joeandselah.co">info@joeandselah.co</a>{" "}
        for information on packages and prices. Our packages currently start at
        $1,600.
      </p>
    </div>
  );
};

export default Info;
