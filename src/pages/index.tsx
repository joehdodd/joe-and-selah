import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="p-8">
        <ImageGrid />
      </div>
    </>
  );
}
