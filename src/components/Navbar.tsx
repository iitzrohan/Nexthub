import { getCart } from "@/lib/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "@/components/ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="mb-4 rounded-lg bg-teal-500">
      <div className="m-auto flex max-w-[1536px] justify-between p-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-[350px] gap-6 rounded-box bg-base-100 p-2 shadow-lg"
          >
            <form action={searchProducts}>
              <div className="form-control">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="input input-bordered w-full min-w-[100px]"
                />
              </div>
            </form>
            <li>
              <Link href="/" className="btn">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="btn">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="btn">
                About
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="btn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <Link
              href="/"
              className="font-serif text-3xl font-semibold xl:text-4xl"
            >
              <div className="inline rounded-md bg-black text-white">
                <p>NextHub</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <div>
            <form action={searchProducts}>
              <div className="form-control">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="input input-bordered w-full min-w-[100px]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/categories" className="btn btn-ghost">
            Categories
          </Link>
          <Link href="/about" className="btn btn-ghost">
            About
          </Link>
          <ShoppingCartButton cart={cart} />
          <Link href="/sign-in" className="btn btn-ghost hidden lg:flex">
            Sign in
          </Link>
        </div>
        <div className="flex gap-4 lg:hidden">
          <ShoppingCartButton cart={cart} />
          <Link href="/sign-in" className="btn btn-ghost hidden lg:flex">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
