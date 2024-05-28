import React from "react";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-2 md:p-4 flex flex-row gap-4 justify-between items-start shadow-md">
      <div>
        <Link href="/">
          <h1 className="text-4xl text-center md:text-left md:text-2xl">
            Joe & Selah{" "}
            <span className="hidden md:inline">
              | Chattanooga Documentary Photographers
            </span>
          </h1>
          <hr className="hidden md:block mt-[-6px]" />
        </Link>
      </div>
      <div className="md:text-2xl">
        <button onClick={toggleMenu} className="md:hidden">
          <IconMenu2 size={24} />
        </button>
        <div className={`${isMenuOpen ? '' : 'hidden'} md:block`}>
          <Link href="/about">Info</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;