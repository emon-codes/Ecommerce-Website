import { useEffect, useState } from "react";


const useData = () => {
     const [cetagorys, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
    
         const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) =>setProducts(data));
  }, []);

  
  const [posts, setPost] = useState([])
  useEffect(() => {
    fetch("")
  })




  






  return {cetagorys,products}
}

export default useData

