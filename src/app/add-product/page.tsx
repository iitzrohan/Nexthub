import { Metadata } from "next";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Add product - Nexthub",
};

const NewProductForm = dynamic(() => import("./NewProductForm"), {
  ssr: false,
});

export default async function page() {
  const session = await getServerSession(authOptions);
  // Basic authentication, do not use in production
  if (session?.user.role === "ADMIN") {
    return <NewProductForm />;
  } else if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  } else {
    redirect("/not-authorized");
  }
}
