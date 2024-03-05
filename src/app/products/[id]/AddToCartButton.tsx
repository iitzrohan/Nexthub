"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Span } from "next/dist/trace";
import { useState, useTransition } from "react";

type AddToCartButtonProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => void;
};

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <ShoppingCartIcon size={24} />
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="font-semibold text-success">Added to cart.</span>
      )}
    </div>
  );
}
