


import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const product = products.find(product => product.id === idInt);

    if (!product) {
        return <div>Product not found</div>; // Handle the case where product is not found
    }

    const { name, image, description } = product;
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
