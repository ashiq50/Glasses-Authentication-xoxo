import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h1 className="text-7xl text-rose-800 font-bold">404</h1>
            <h2 className="text-7xl text-rose-800 font-bold">Not Found</h2>
            <Link to="/" className="btn btn-outline btn-warning">Back</Link>
        </div>
    );
};

export default NotFound;