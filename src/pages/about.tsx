import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <PageLayout>
      <div className="pl-16 pr-16">
        <h2 className="text-[64px] text-italic text-center mb-0">Hello!</h2>
        <p className="text-[40px] text-center mt-[-1.5rem] mb-4">
          We&apos;re glad that you found us!
        </p>
        <hr />
        <div className="pt-8 grid grid-cols-2 gap-8">
          <div>
            <p className="text-2xl text-center mb-2">
              We are Chattanooga wedding photographers specializing in intimate,
              documentary style photography for engagements and weddings. We
              love capturing those intimate details of your wedding day that
              will remind you of how special it really was.
            </p>
            <p className="text-2xl text-center mb-2">
              Interested in choosing us as your Chattanooga wedding
              photographers? Send an email to{" "}
              <a href="mailto:info@joeandselah.co">info@joeandselah.co</a> for
              information on packages and prices. Our packages currently start
              at $1,600.
            </p>
          </div>
          <Image
            src="/img/KatieDave-4.jpg"
            alt="Wedding"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default About;