import Link from "next/link";

export default function NotFound() {
  return (
    <main className="m-auto my-10 min-h-screen space-y-8 px-3 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Return to home
      </Link>
    </main>
  );
}
