import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/lab"; // v4 compatible

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings || 0,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };

  const productImage =
    product.images && product.images.length > 0
      ? product.images[0].url
      : "/placeholder.png";

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      
      {/* ✅ FIXED IMAGE WRAPPER */}
      <div className="productCardImg">
        <img src={productImage} alt={product.name} />
      </div>

      <p>{product.name}</p>

      <div>
        <Rating {...options} />
        <span className="productCardSpan">
          ({product.numOfReviews || 0} Reviews)
        </span>
      </div>

      <span>{`₹${product.price || 0}`}</span>
    </Link>
  );
};

export default ProductCard;