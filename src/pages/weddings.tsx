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
          <ImageGrid imageSources={imageSources} />
        </div>
      </PageLayout>
    </>
  );
};

export default Weddings;
