import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div className="w-74 flex flex-col justify-center items-center border border-gray-200 rounded-md" >
        <img className="w-72" src={product.image} alt="" />
      </div>
      <div>
        <p>{product.categoryName}</p>
        <h3>{product.name}</h3>
        <div className="flex gap-1 text-orange-500">
          <span><IoStarHalfOutline /></span>
          <span><IoStarHalfOutline /></span>
          <span><IoStarHalfOutline /></span>
          <span><IoStarHalfOutline /></span>
          <span><IoStarHalfOutline /></span>
        </div>
        <div className="flex gap-3 ">
          <p >{product.price}</p> <FaBangladeshiTakaSign />
          <p className="line-through text-gray-500">{product.mrp}</p> <FaBangladeshiTakaSign />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
