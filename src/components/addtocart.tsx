"use client";
import { useState } from "react";

interface AddToCartProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex border border-gray-300 rounded">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="px-3 text-gray-600 hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
          className="w-10 text-center border-l border-r border-gray-300 focus:outline-none"
        />
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-3 text-gray-600 hover:bg-gray-200"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
                  type="button"
                  className="h-16 w-[215px] border-2 hover:border-x-[3px] hover:border-y-[3px] border-black rounded-2xl flex items-center justify-center"
                >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;