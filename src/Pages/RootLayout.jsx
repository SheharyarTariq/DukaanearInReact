import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";

function RootLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default RootLayout;