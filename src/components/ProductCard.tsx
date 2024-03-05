import { formatMoney } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, description, imageUrl, price } = product;
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <Link className="card-title" href={"/products/" + product.id}>
          {name}
        </Link>
        {isNew && <div className="badge badge-secondary">New</div>}
        <p className="line-clamp-4 overflow-hidden text-ellipsis">
          {description}
        </p>
        <div className="card-actions items-center justify-end">
          <p>{formatMoney(price)}</p>
          <Link href={"/products/" + product.id} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
