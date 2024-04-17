import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id, image, city, country, title, overview} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p>{city}, {country}</p>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{overview}</p>
    <div className="card-actions flex justify-between">
      <button className="btn btn-primary ">Shop Now</button>
      {/* <Link to="{`/book/${id}`}" className="btn btn-primary ">Product Details</Link> */}
      <Link to={`/product/${id}`} className="btn btn-primary">Product Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.bool
  };