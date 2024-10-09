import {Link, NavLink} from "react-router-dom";
import DukaanearLogo from "../../assets/Dukaanear Logo.webp";

function Footer() {
    return (
        <div className={`bg-darkGray `}>
            <div className={`bsm:flex mb-20`}>
                <div className={` bsm:w-1/4 p-5`}>
                    <NavLink to='/' className=' content-center flex transform'>
                        <img src={DukaanearLogo} alt="DukaanearLogo"
                             className=' h-[60px] w-[60px] ml-6 mr-4'
                        />
                        <p className='  content-center font-semibold text-2xl'>Dukaanear</p>
                    </NavLink>
                    <p className={`py-4 px-4`}>Dukaanear is a revolutionary mobile app connecting local shoppers
                        with
                        nearby retailers, making
                        shopping easy, convenient, and community-focused. Join us in transforming local commerce,
                        one
                        purchase at a time.</p>

                </div>
                <div className={` bsm:w-1/4 p-5 justify-center items-center font-semibold text-md `}>
                    <ul className={`space-y-4 `}>
                        <li className={`h-[60px] font-bold content-center text-xl`}>Our Company</li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/about-us' relative="path">About Us</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/contact-us'>Contact Us</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/our-team'>Our Team</Link></li>

                    </ul>


                </div>
                <div className={` bsm:w-1/4 p-5 justify-center items-center font-semibold text-md`}>
                    <ul className={`space-y-4 `}>
                        <li className={`h-[60px] font-bold content-center text-xl`}>
                            Partner with us
                        </li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/investors'>Investor Program</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/'>Vendor Program</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/'>Career with Us</Link></li>
                    </ul>


                </div>
                <div className={` bsm:w-1/4 p-5 font-semibold text-md justify-center items-center`}>
                    <ul className={`space-y-4 `}>
                        <li className={`h-[60px]  font-bold content-center text-xl`}>
                            Useful Links
                        </li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/'>Home</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/about-us'>About Us</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/our-team'>Our Team</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/investors'>Invest</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/blog'>Blog</Link></li>
                        <li className={`hover:text-green transition duration-200`}>
                            <Link to='/contact-us'>Contact Us</Link></li>
                    </ul>


                </div>

            </div>

            <hr className={`bg-lightGray text-lightGray`}/>
            <p className={`py-7 px-16 text-sm  `}>Copyright ©2024 <strong>Dukaanear</strong>. All rights reserved.</p>
        </div>

    );
}

export default Footer;
