import { Metadata } from "next";
import NewProductForm from "./NewProductForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Add product - Nexthub",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // Basic authentication, do not use in production
  if (session && user?.email === "t.rohan1903@gmail.com") {
    return <NewProductForm />;
  } else {
    notFound();
  }
}
