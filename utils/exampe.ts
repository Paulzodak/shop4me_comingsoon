import necktie from "@/assets/productImages/neckTie.jpg";
import cufflinks from "@/assets/productImages/cufflinks.jpg";
import belt from "@/assets/productImages/belt.jpg";
import pocketSquare from "@/assets/productImages/pocketSquare.jpg";
import sunGlasses from "@/assets/productImages/glasses.jpg";
import watch from "@/assets/productImages/watch.jpg";
import wallet from "@/assets/productImages/wallet.jpg";
import hat from "@/assets/productImages/hat.jpg";
import cap from "@/assets/productImages/cap.jpg";
import bracelet from "@/assets/productImages/bracelet.jpg";
import shoe from "@/assets/productImages/shoe.jpeg";
import shirt from "@/assets/productImages/shirt.jpeg";
import pant from "@/assets/productImages/pants.jpeg";
import shades from "@/assets/productImages/shades.jpeg";
import accessories from "@/assets/productImages/accessories.jpeg";
import { IProductItem, TypeProductArray } from "@/types/productItem";
export const generateMaleFashionAccessories = () => {
  const accessories: TypeProductArray = [];

  const names = [
    "Necktie",
    "Cufflinks",
    "Belt",
    "Pocket Square",
    "Sunglasses",
    "Watch",
    "Wallet",
    "Hat",
    "Tie Clip",
    "Bracelet",
  ];
  const colors = [
    "Black",
    "Brown",
    "Blue",
    "Gray",
    "Red",
    "Green",
    "White",
    "Beige",
    "Navy",
    "Silver",
  ];
  const brands = [
    "Gucci",
    "Prada",
    "Louis Vuitton",
    "Armani",
    "Versace",
    "Dior",
    "Hermes",
    "Burberry",
    "Fendi",
    "Rolex",
  ];
  const images = [
    necktie,
    cufflinks,
    belt,
    pocketSquare,
    sunGlasses,
    watch,
    wallet,
    hat,
    cap,
    bracelet,
  ];

  for (let i = 0; i < 10; i++) {
    const accessory: IProductItem = {
      id: `accessory-${i + 1}`,
      name: names[i],
      price: Math.floor(Math.random() * 100 + 50),
      color: colors[Math.floor(Math.random() * colors.length)],
      brand: brands[i],
      category: "Male Fashion Accessories",
      image: images[i],
    };

    accessories.push(accessory);
  }

  return accessories;
};

export const categories = [
  {
    title: "Men's shoe",
    image: shoe,
  },
  {
    title: "Men's shirt",
    image: shirt,
  },
  {
    title: "Men's belt",
    image: belt,
  },
  {
    title: "Men's pant",
    image: pant,
  },
  {
    title: "Men's shades",
    image: shades,
  },
  {
    title: "Men's accessories",
    image: accessories,
  },
];
