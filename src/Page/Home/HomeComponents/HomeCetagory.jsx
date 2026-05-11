import React, { useEffect, useState } from "react";

const HomeCetagory = () => {
  const [cetagory, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="container mx-auto px-24">
      <div className="flex justify-center gap-8">
        {cetagory.map((category) => (
          <div className=" flex flex-col items-center bg-gray-100 px-16 py-4">
            <img className="w-24" src={category.image} alt="" />
            <p>{category.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCetagory;
