
import './App.css'
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Pages/RootLayout.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import Investors from "./Pages/Investors.jsx";
import Blog from "./Pages/Blog.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/400.css"; // Specify weight
import "@fontsource/raleway/400-italic.css";

const router=createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index:true,element: <Home />,},
            {path: "/contact-us",element: <ContactUs />,},
            {path: "/about-us",element: <AboutUs />,},
            {path: "/our-team",element: <OurTeam />,},
            {path: "/investors",element: <Investors />,},
            {path: "/blog",element: <Blog />,}
        ],

    },
]);

function App() {
    return (
      <RouterProvider router={router}/>
  )
}

export default App
