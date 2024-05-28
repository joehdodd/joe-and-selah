import Link from "next/link";

const Header = () => {
  return (
    <header className="p-2 md:p-4 flex flex-col md:flex-row gap-4 justify-between shadow-md">
      <div>
        <Link href="/">
          <h1 className="text-xl md:text-2xl">
            Joe & Selah | Chattanooga Documentary Photographers
          </h1>
          <hr className="mt-[-6px]"/>
        </Link>
      </div>
      <div className="md:text-2xl">
        <Link href="/about">Info</Link>
      </div>
    </header>
  );
};

export default Header;
