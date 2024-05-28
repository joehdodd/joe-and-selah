import React from "react";
import Header from "../components/Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pr-8 pl-8">{children}</div>
    </>
  );
}
