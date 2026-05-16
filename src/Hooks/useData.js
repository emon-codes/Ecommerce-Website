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

  

  const [pono, setPono] = useState([]);
    useEffect(
      () => {
        fetch('try.json')
          .then((res) => res.json())
          .then((data) => setPono(data))
      
      }, []);





  return {cetagorys,products, pono}
}

export default useData

