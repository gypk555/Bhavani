
import {React} from "react";

import "./ProductGrid.css";


const products = [
  {
    id: 1,
    name: "Dark Brown Stitchless Stripes Polo T-Shirt",
    price: "INR 1,399",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "#", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Olive Stitchless Stripes Polo T-Shirt",
    price: "INR 1,399",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "#",
  },
  {
    id: 3,
    name: "Brown Stitchless Stripes Polo T-Shirt",
    price: "INR 1,399",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "#",
  },
  {
    id: 4,
    name: "Grey Slim Fit Jeans",
    price: "INR 1,699",
    sizes: ["30", "32", "34", "36", "38"],
    image: "#",
  },
  {
    id: 5,
    name: "Black Graphic Print Oversized Fit T-Shirt",
    price: "INR 1,099",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "#",
  },
  {
    id: 6,
    name: "Grey Slim Fit Jeans",
    price: "INR 1,699",
    sizes: ["30", "32", "34", "36", "38"],
    image: "#",
  },
  {
    id: 7,
    name: "Black Graphic Print Oversized Fit T-Shirt",
    price: "INR 1,099",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "#",
  },
  {
    id: 8,
    name: "Grey Slim Fit Jeans",
    price: "INR 1,699",
    sizes: ["30", "32", "34", "36", "38"],
    image: "#",
  },
  {
    id: 9,
    name: "Black Graphic Print Oversized Fit T-Shirt",
    price: "INR 1,099",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "#",
  },
  {
    id: 10,
    name: "Grey Slim Fit Jeans",
    price: "INR 1,699",
    sizes: ["30", "32", "34", "36", "38"],
    image: "#",
  },
  {
    id: 12,
    name: "Black Graphic Print Oversized Fit T-Shirt",
    price: "INR 1,099",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "#",
  }
];

const ProductGrid = () => {

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-sizes">
              {product.sizes.map((size) => (
                <span key={size} className="product-size">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;