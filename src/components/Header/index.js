import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <div>
        <Link href="/">
          <h1 className="text-2xl">
            Joe & Selah | Chattanooga Documentary Photographers
          </h1>
        </Link>
      </div>
      <div className="text-2xl">
        <Link href="/about">Info</Link>
      </div>
    </header>
  );
};

export default Header;
