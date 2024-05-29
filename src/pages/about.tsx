import Contact from "@/components/Contact";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <PageLayout>
      <div className="pl-2 pr-2 md:pl-16 md:pr-16 pt-4">
        <h2 className="text-4xl md:text-[64px] text-italic text-center mb-0">
          Hello!
        </h2>
        <p className="text-2xl md:text-[40px] text-center mb-4">
          We&apos;re glad that you found us!
        </p>
        <hr />
        <div className="pt-8 mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-2xl mb-2">
              We are Chattanooga photographers specializing in intimate,
              documentary style photography for engagements, weddings and
              families.
            </p>
            <h2 className="text-3xl italic">Weddings</h2>
            <p className="text-2xl mb-2">
              Interested in choosing us as your Chattanooga wedding
              photographers? Reach out via the contact form below for
              information on packages and prices. Our wedding photography
              packages currently start at $1,800.
            </p>
            <h2 className="text-3xl italic">Families</h2>
            <p className="text-2xl mb-2">
              Interested in choosing us as your Chattanooga family
              photographers? Reach out via the contact form below for
              information on packages and prices. Our family photography
              packages currently start at $200.
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
        <Contact />
      </div>
    </PageLayout>
  );
};

export default About;
