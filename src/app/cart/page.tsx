import { getCart } from "@/lib/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Your Cart - NextHub",
};
export default async function CartPage() {
  const cart = await getCart();
  return (
    <div className="mb-4 min-h-screen">
      <h1 className="mb-4 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          key={cartItem.id}
          cartItem={cartItem}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && (
        <div className="mb-4 flex items-center lg:flex-col">
          Your cart is empty
        </div>
      )}
      <div className="flex flex-col items-end lg:items-center">
        <p className="mb-4 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary lg:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}
