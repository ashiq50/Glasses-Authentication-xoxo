import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product =><Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;