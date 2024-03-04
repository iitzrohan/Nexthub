import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-[1536px] items-center justify-between p-6">
        <Link className="link-hover link" href="/">
          Home
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered"
          />
          <Link href="/" className="link-hover link">
            Cart
          </Link>
          <Link href="/" className="link-hover link">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
