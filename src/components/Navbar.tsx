import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-[1536px] items-center justify-between p-6">
        <Link className="link-hover link" href="/">
          Home
        </Link>
        <div className="flex items-center space-x-8">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered"
          />
          <Link href="/" className="link-hover link">
            <ShoppingCartIcon size={24} />
          </Link>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={48}
                height={48}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
