("./ProductCard");
import prisma from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Link from "next/link";

type productProps = {
  product: Product;
};

export default async function ProductList() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <div className="hero my-4 rounded-xl bg-base-300 py-4">
        <div className="hero-content flex-col lg:flex-row">
          <Link href={"/products/" + products[0].id}>
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
          </Link>
          <div>
            <Link href={"/products/" + products[0].id}>
              <h1 className="font-serif text-5xl font-bold">
                {products[0].name}
              </h1>
            </Link>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
