import { Metadata } from "next";
import NewProductForm from "./NewProductForm";
export const metadata: Metadata = {
  title: "Add product - Nexthub",
};

export default function page() {
  return <NewProductForm />;
}
