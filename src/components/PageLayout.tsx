import React from "react";
import Header from "../components/Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pr-2 pl-2 md:pr-8 md:pl-8">{children}</div>
    </>
  );
}
