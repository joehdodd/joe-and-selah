import ImageGrid from "@/components/ImageGrid";
import PageLayout from "@/components/PageLayout";
import React from "react";

const Families = () => {
  const imageSources = [
    "/img/McGee-1.jpg",
    "/img/Sandidge-1.jpg",
    "/img/Sikkema-1.jpg",
    "/img/Sparks-1.jpg",
  ];
  return (
    <PageLayout>
      <div className="p-2 md:p-4">
        <ImageGrid imageSources={imageSources} />
      </div>
    </PageLayout>
  );
};

export default Families;
