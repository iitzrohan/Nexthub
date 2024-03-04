import { formatMoney } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps) {
  const { name, description, imageUrl, price } = product;
  return (
    <div className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#" className="block">
        <Image
          className="h-56 w-full object-cover"
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
        />
      </a>
      <div className="px-4 py-4">
        <a href="#" className="block">
          <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Details
          </a>
          <p>{formatMoney(price)}</p>
        </div>
      </div>
    </div>
  );
}
