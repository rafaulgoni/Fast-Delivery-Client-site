import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {

    const location = useLocation()
    console.log(location);
    const doNotShowNavbarFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {doNotShowNavbarFooter || <Navbar/>}
            <Outlet/>
            {doNotShowNavbarFooter || <Footer/>}
        </div>
    );
};

export default Root;