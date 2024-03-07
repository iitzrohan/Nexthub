"use client";

import { CartItemWithProduct } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

type CartEntryProps = {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
};
export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <Image
          src={product.imageUrl}
          width={200}
          height={200}
          alt={product.name}
          className="rounded-lg"
        />
        <div>
          <Link href={`/products/${product.id}`} className="font-bold">
            {product.name}
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
          <div className="my-2 flex items-center gap-2">
            Quantity:
            <select
              className="select select-bordered w-full max-w-20"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              {
                <option key="remove" value="0">
                  Delete
                </option>
              }
              {quantityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <div>Total: {formatPrice(product.price * quantity)}</div>
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
