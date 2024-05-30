import React from "react";
import SEO from "@/components/SEO";
import ImageGrid from "@/components/ImageGrid";
import PageLayout from "@/components/PageLayout";

const Weddings = () => {
  const imageSources = [
    "/img/AnnaJordan-3.jpg",
    "/img/AnnaJordan-4.jpg",
    "/img/FranklinKristin-3.jpg",
    "/img/KatieDave-1.jpg",
    "/img/KatieDave-2.jpg",
  ];
  return (
    <>
      <SEO
        title="Chattanooga Wedding Photograhers | Joe & Selah"
        description="Joe & selah are wedding photographers in Chattanooga, TN offering documentary-style engagement and wedding photography."
        image="/img/AnnaJordan-3.jpg"
      />
      <PageLayout>
        <div className="p-2 md:p-4">
          <div className="mb-4 md:p-12">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold text-center">
              Chattanooga Wedding Photographers
            </h1>
            <p className="md:p-8 text-2xl text-center">
              We are documentary-style wedding photographers in Chattanooga, TN
              offering engagement and wedding photography. Our approach is to
              capture as many of the moments of your day as they happen, rather
              than staging them. We believe that these photos are the ones that
              are most authentic to you and your relationship. We would love to
              be a part of your special day!
            </p>
          </div>
          <ImageGrid imageSources={imageSources} />
        </div>
      </PageLayout>
    </>
  );
};

export default Weddings;
