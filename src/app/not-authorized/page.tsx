import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <main className="m-auto my-10 min-h-screen space-y-8 px-3 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-red-600 lg:text-5xl">
        Unauthorized Access Detected
      </h1>
      <p className="text-lg text-gray-600">
        Your attempt to access this page has been logged.
      </p>
      <p className="text-lg text-gray-600">
        {user?.email
          ? `${user?.email} has been identified as the intruder.`
          : "Unauthorized user detected."}
      </p>
      <p className="text-lg text-red-600">
        You have violated security protocols. Further attempts will result in
        severe consequences.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home
      </Link>
    </main>
  );
}
