import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="app-wrapper">
        <Info />
        <hr />
        <ImageGrid />
      </div>
    </>
  );
}
