import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const imageSources = [
    "/img/AnnaJordan-1.jpg",
    "/img/AnnaJordan-2.jpg",
    "/img/AnnaJordan-3.jpg",
    "/img/AnnaJordan-4.jpg",
    "/img/FranklinKristin-1.jpg",
    "/img/FranklinKristin-2.jpg",
    "/img/FranklinKristin-3.jpg",
    "/img/KatieDave-1.jpg",
    "/img/KatieDave-2.jpg",
    "/img/KatieDave-3.jpg",
    "/img/KatieDave-4.jpg",
  ]
  return (
    <>
      <Header />
      <Hero />
      <div className="p-8">
        <ImageGrid imageSources={imageSources} />
      </div>
    </>
  );
}
