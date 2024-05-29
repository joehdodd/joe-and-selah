import React from "react";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call the function initially to set the state based on initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="p-2 md:p-4 flex flex-col md:flex-row gap-4 justify-between shadow-md">
      <div className="flex flex-row gap-4 justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl text-center md:text-left md:text-2xl">
            Joe & Selah{" "}
            <span className="hidden md:inline">
              | Chattanooga Documentary Photographers
            </span>
          </h1>
        </Link>
        {isMobile && (
          <div className="flex items-center">
            <button onClick={toggleMenu} className="md:hidden">
              <IconMenu2 size={24} />
            </button>
          </div>
        )}
      </div>
      <div
        className={`${
          isMobile && !isMenuOpen ? "hidden" : ""
        } flex flex-col md:flex-row md:gap-4`}
      >
        <Link className="text-2xl" href="/">
          Home
        </Link>
        <Link className="text-2xl" href="/weddings">
          Weddings
        </Link>
        <Link className="text-2xl" href="/families">
          Families
        </Link>
        <Link className="text-2xl" href="/about">
          Info
        </Link>
      </div>
    </header>
  );
};

export default Header;
