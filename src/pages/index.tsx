import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

export default function Home() {
  const imageSources = [
    "/img/AnnaJordan-1.jpg",
    "/img/AnnaJordan-2.jpg",
    "/img/FranklinKristin-1.jpg",
    "/img/FranklinKristin-2.jpg",
    "/img/KatieDave-3.jpg",
    "/img/KatieDave-4.jpg",
  ];
  return (
    <>
      <SEO
        title="Chattanooga Wedding Photographers | Joe & Selah"
        description="Joe & selah are wedding photographers in Chattanooga offering engagement, wedding and family photo services."
        image="/img/AnnaJordan-1.jpg"
      />
      <Header />
      <Hero />
      <div className="p-8">
        <ImageGrid imageSources={imageSources} />
      </div>
      <Contact />
    </>
  );
}
