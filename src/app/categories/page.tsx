import Link from "next/link";

export default function page() {
  return (
    <main className="m-auto my-10 min-h-screen space-y-8 px-3 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Not Implemented
      </h1>
      <p>Sorry, the page you are looking for is not implemented currently.</p>
      <p>Check after some time.</p>
      <Link href="/" className="btn btn-primary">
        Return to home
      </Link>
    </main>
  );
}
