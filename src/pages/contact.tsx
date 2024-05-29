import Contact from "@/components/Contact";
import PageLayout from "@/components/PageLayout";
import React from "react";

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="pt-4">
        <h2 className="text-3xl text-center">
          Use the form below to contact us about being your documentary
          photographers in Chattanooga.
        </h2>
      </div>
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
