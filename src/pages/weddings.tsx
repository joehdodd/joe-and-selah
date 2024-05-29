import ImageGrid from "@/components/ImageGrid";
import PageLayout from "@/components/PageLayout";
import React from "react";

const Weddings = () => {
  const imageSources = [
    "/img/AnnaJordan-3.jpg",
    "/img/AnnaJordan-4.jpg",
    "/img/FranklinKristin-3.jpg",
    "/img/KatieDave-1.jpg",
    "/img/KatieDave-2.jpg",
  ];
  return (
    <PageLayout>
      <div className="p-2 md:p-4">
        <ImageGrid imageSources={imageSources} />
      </div>
    </PageLayout>
  );
};

export default Weddings;
