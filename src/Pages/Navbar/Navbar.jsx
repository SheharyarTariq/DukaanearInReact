import DukaanearLogo from '../../assets/Dukaanear Logo.webp';
import { NavLink} from "react-router-dom";
import Links from "../../Components/Links.jsx";
import {Link} from "react-router-dom";
import Buttons from "../../Components/Buttons.jsx";
import {useState} from "react";
function Navbar() {
    const btnClass=" border rounded-2xl font-semibold hover:bg-black hover:text-white transition duration-500 h-[48px] bmd:w-[190px] w-[150px]"
    const [menuOpen, setMenuOpen] = useState(false);
    function menuHandler(){
    setMenuOpen(prev => !prev);
    }
    const clss = 'ml-2 text-sm p-3'
    return (<>
        <div className=" mt-8 mb-8   ">
            <ul className="flex items-center  ">
                <NavLink to='' className=' content-center flex transform'>
                    <img src={DukaanearLogo} alt="DukaanearLogo"
                    className=' h-[60px] w-[60px] ml-6 mr-4'
                    />
                    <li  className='  content-center font-semibold text-2xl' >Dukaanear</li>
                </NavLink>

                <div
                    className={` hidden bsm:flex w-full justify-end bmd:space-x-9 md:space-x-4 smd:space-x-4 mr-[25px] ml-[25px]`}>
                    <li><Links to="">Home</Links></li>
                    <li><Links to="/about-us">About Us</Links></li>
                    <li><Links to="/our-team">Our Team</Links></li>

                    <li><Links to="/investors">Investors</Links></li>
                    <li><Links to="/blog">Blog</Links></li>
                    <li><Links to="/contact-us">Contact Us</Links></li>


                </div>
                <li className=" mr-[32px] hidden bsm:flex">
                    <Buttons btnClass={btnClass}>Download Now</Buttons>

                </li>

                <li className={` w-full flex justify-end  bsm:hidden fa-3x  ${menuOpen ? 'bi bi-x' : 'bi bi-list'} `}
                    onClick={menuHandler}></li>


            </ul>
        </div>
            {
                menuOpen &&
                <ul>

                    <li className={clss} onClick={menuHandler}><Link to="/about-us" >About Us</Link></li>
                    <li className={clss} onClick={menuHandler}><Link to="/our-team">Our Team</Link></li>
                    <li className={clss} onClick={menuHandler}><Link to="/investors">Investors</Link></li>
                    <li className={clss} onClick={menuHandler}><Link to="/blog">Blog</Link></li>
                    <li className={clss} onClick={menuHandler}><Link to="/contact-us">Contact Us</Link></li>

                </ul>


            }
        </>
    );
}

export default Navbar;