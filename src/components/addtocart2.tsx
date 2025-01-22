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
  const [quantity, ] = useState(1);

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
    <div>
      <button
        onClick={handleAddToCart}
                  type="button"
                  className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-graay transition-shadow"
                >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;