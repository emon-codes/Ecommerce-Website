import React, { useEffect, useState } from 'react'

const useProductsJson = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
        .then((data) => setproduct(data))



    },[])






    return {
        product
      
  }
    
  
}

export default useProductsJson