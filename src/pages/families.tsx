import React from "react";
import ImageGrid from "@/components/ImageGrid";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

const Families = () => {
  const imageSources = [
    "/img/McGee-1.jpg",
    "/img/Sandidge-1.jpg",
    "/img/Sikkema-1.jpg",
    "/img/Sparks-1.jpg",
  ];
  return (
    <>
      <SEO
        title="Chattanooga Family Photographers | Joe & Selah"
        description="Joe & Selah are family photographers in Chattanooga, TN offering documentary-style family photography services."
        image="/img/Sparks-1.jpg"
      />
      <PageLayout>
        <div className="p-2 md:p-4">
          <ImageGrid imageSources={imageSources} />
        </div>
      </PageLayout>
    </>
  );
};

export default Families;
