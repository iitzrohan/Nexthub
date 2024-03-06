"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="m-auto my-10 min-h-screen space-y-8 px-3 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Error
      </h1>
      <p>An unexpected error occured</p>
      <Link href="/" className="btn btn-primary">
        Return to home
      </Link>
    </main>
  );
}
