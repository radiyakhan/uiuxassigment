type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    title: "Syltherine",
    description:
      "Slytherin is a Hogwarts house known for its ambition, cunning, and resourcefulness. Its members often value leadership, determination, and achieving greatness at any cost.",
    price: 2500,
    image: "/sylthe.jpg",
    id: 1,
  },
  {
    title: "Leviosa",
    description:
      "Leviosa is a spell from the Harry Potter universe, used to levitate objects. It's typically cast by saying Wingardium Leviosa, and allows the caster to make objects float in the air.",
    price: 2500,
    image: "/chair.jpg",
    id: 2,
  },
  {
    title: "Lolito",
    description:
      "The Lolito Sofa combines modern elegance with unparalleled comfort. Crafted with premium materials, this stylish piece is perfect for adding a touch of sophistication to any living space.",
    price: 75000,
    image: "/sofa.jpg",
    id: 3,
  },
  {
    title: "Respira",
    description:
      "The Respira blend modern elegance with durability, designed for open-air relaxation. Crafted with weather-resistant materials, they offer style and comfort, perfect for any outdoor setting.",
    price: 5000,
    image: "/room.jpg",
    id: 4,
  },
  {
    title: "Grifo",
    description:
      "Add a touch of elegance to your space with this beautifully crafted lamp, offering both style and warmth. Its modern design and soft glow make it the perfect accent for any room.",
    price: 1500,
    image: "/lamp.jpg",
    id: 5,
  },
  {
    title: "Muggo",
    description:
      "Transform your living room with this chic sofa set, offering both luxury and comfort. Its timeless design and plush cushions create the perfect space for relaxation and style.",
    price: 15000,
    image: "/muggo.jpg",
    id: 6,
  },
  {
    title: "Pingky",
    description:
      "Transform your living room with this chic sofa set, offering both luxury and comfort. Its timeless design and plush cushions create the perfect space for relaxation and style.",
    price: 7000,
    image: "/sofaset.jpg",
    id: 7,
  },
  {
    title: "Potty",
    description:
      "Enhance your space with this minimalist brown sofa, combining sleek design with ultimate comfort. Its neutral tone and clean lines make it a versatile addition to any modern interior.",
    price: 5000,
    image: "/potty.jpg",
    id: 8,
  },
];
export default products