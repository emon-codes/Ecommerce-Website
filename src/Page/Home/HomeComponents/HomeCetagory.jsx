import useData from "../../../Hooks/useData";

const HomeCetagory = () => {
  const { cetagorys } = useData();

  return (
    <div className="container mx-auto px-24">
      <div className="flex justify-center gap-8">
        {cetagorys.map(category=> (
          <div className=" flex flex-col items-center bg-gray-100 px-16 rounded-md py-4">
            <img className="w-16 h-16 mb-3" src={category.image} alt="" />
            <p>{category.name}</p>
            <p className="text-xs text-gray-400">{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCetagory;
