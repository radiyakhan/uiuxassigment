"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface AddToWishProps {
  product: {
    id: number; // Match the type of id with WishItem in the Page component
    title: string;
    price: number;
    image: string;
  };
}

const AddToList: React.FC<AddToWishProps> = ({ product }) => {
  const [quantity] = useState(1);

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const existingProductIndex = wishlist.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      wishlist[existingProductIndex].quantity += quantity;
    } else {
      wishlist.push({ ...product, quantity });
    }

    // Correcting the use of localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Product added to wishlist!");
  };
  

  return (
    <div>
      <button
        onClick={handleAddToWishlist}
        className="hover:text-black flex items-center"
      >
        <FaHeart />
        Like
      </button>
    </div>
  );
};

export default AddToList;
