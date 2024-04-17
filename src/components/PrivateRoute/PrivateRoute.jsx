import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
  };