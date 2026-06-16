import React from "react";
import SectionHeading from "../../../../Components/SharedComponents/SectionHeading";
import useData from "../../../../Hooks/useData";
import ProductCard from "../../../../Components/SharedComponents/ProductCard";

const PopularProducts = () => {
  const { cetagorys, products } = useData();
  console.log(products);

  return (
    <div className="container mx-auto px-24 py-24">
      <div className="flex justify-between items-center">
        <SectionHeading
          heading={"Popular"}
          colorHeading={"products"}
          discription={"Shop online for new arrivals and get free shoping!"}
        />
        <div className="flex gap-8">
          {cetagorys.map((category) => (
            <div>
              <p className="cursor-pointer"> {category?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-wrap gap-4 my-8">
          {products.map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
