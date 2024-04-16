
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom"

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;