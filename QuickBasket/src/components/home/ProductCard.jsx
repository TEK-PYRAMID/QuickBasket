// Owner: Sayeed (Home & Categories)
// "Reusable product sections" per PRD — used on Home's Featured Products grid.
// Add-to-cart wiring is intentionally minimal: it uses the CartContext shape
// as it exists today (cartItems/setCartItems). Mubeena's real cart logic
// (quantities, totals, persistence) should replace/extend this as it lands —
// this just keeps Home functional and integration-tested in the meantime.

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const cart = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!cart) return;

    const { cartItems, setCartItems } = cart;
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <Link
          to={`/products/${product.id}`}
          className="text-sm font-medium text-gray-800 line-clamp-2"
        >
          {product.name}
        </Link>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            ₹{product.price}
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
