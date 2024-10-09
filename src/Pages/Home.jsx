// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Buttons from "../Components/Buttons.jsx";
import cardImg1 from '../assets/ryhry-1.png'
import cardImg2 from '../assets/ogrvj.png'
import Card from "../Components/Card.jsx";
import starImg from '../assets/ldkfmg.png'
import Cards from "../Components/Cards.jsx";
import icon1 from '../assets/homann in hand n.webp'
import icon5 from '../assets/Easy-Navigation.webp'
import icon3 from '../assets/Exclusive-Deals.webp'
import icon2 from '../assets//Instant-Access.webp'
import icon4 from '../assets/Time-Saving.webp'
import icon6 from '../assets/Tailored-Recommendation.webp'
import partner1 from '../assets/ggtes-300x300-1-qt2wvfpb9snehj10m6kz9g3rlhxc8wp3scnuyqe8ko.webp'
import partner2 from '../assets/Gronk-300x300-1-qt2wvgn5gmoot4zngozltxv86vspglsu4hbcg0cueg.webp'
import partner3 from '../assets/ruby.webp'
import partner4 from '../assets/v.webp'
import partner5 from '../assets/9.webp'
import partner6 from '../assets/rose.webp'
import partner7 from '../assets/triangles.webp'
// import VendorReviews from '../Data/VendorReviews.js';
import balanceCard from '../assets/krjnv.webp'
import Reviews from "../Components/Reviews.jsx";
// import DukaanearLogo from '../assets/Dukaanear Logo.webp'
// import {Link, NavLink} from "react-router-dom";
import Footer from './Footer/Footer.jsx'
import {useState,useEffect} from "react";
import OurPartner from "../Components/OurPartner.jsx";

function Home() {
    const btnClass = 'bsm:w-72 bsm:ml-0 mr-auto ml-auto bsm:mr-auto  mt-8 mb-28  p-4 pl-8 pr-8 bg-black text-white rounded-xl hover:animate-slowBounce';
    const btnClass4 = 'mr-auto ml-auto  bsm:mt-8 mt-4 bsm:mb-28 mb-10  bsm:p-4 p-2 bsm:px-8  bg-black text-white rounded-xl hover:animate-slowBounce';
    const btnClass2 ='w-[160px] bsm:ml-0 mr-auto ml-auto bsm:mr-auto bg-gray p-4  h-14 rounded-xl bsm:mt-8 bsm:mb-8 mt-4 mb-4 font-bold hover:animate-slowBounce hover:bg-green'
    const btnClass3 ='w-[140px] bsm:ml-0 mr-auto ml-auto bsm:mr-auto bg-black text-white p-2  h-14 rounded-xl bsm:mt-8 bsm:mb-8 mt-4 mb-4 font-semibold hover:animate-slowBounce'
    const cardClass = ' bg-gray p-6 rounded-3xl mt-16 mb-16 bg-cover bg-fit'

    const Review = [
        {   id:1,
            starts:4,
            comment:'Dukaanear makes shopping so much easier! I love finding the best deals right in my neighborhood.',
            name:'Majid Butt',
            designation:'Vendor'},
        {
            id:2,
            starts:4,
            comment:'It’s amazing how quickly I can find exactly what I need without going too far.',
            name:'Zeeshan',
            designation:'Vendor'
        },{
            id:3,
            starts:4,
            comment:'A must-have app for anyone who values their time and wants to support local businesses.',
            name:'Tariq Khan',
            designation:'Vendor'
        },{
            id:4,
            starts:4,
            comment:'The best budgeting app for people serious about getting out of debt.',
            name:'Muhammad Umair',
            designation:'Vendor'
        },
        
    ];
    const [comments,  setComments] = useState([]);

    useEffect(() => {
        return () => {
            localStorage.setItem('Review', JSON.stringify(Review));
        };
    }, [Review]);
    useEffect(() => {
        return () => {
const reviews = JSON.parse(localStorage.getItem('Review'));
if(reviews){
    setComments(reviews);
}
        };
    }, []);


    return (
        <>
            
            <div
                className={` flex justify-center text-center m-2 bg-green border rounded-3xl bg-gradient-to-br hover:from-yellow to-green from-green to-yellow`}>
                <div className={`flex flex-col mt-28 ml-14 mr-14 bsm:text-start text-center w-full`}>

                    <p className={`bsm:w-1/3 bsm:ml-0 bsm:mr-0 ml-auto mr-auto border p-2 pr-6 pl-6 border-black text-center rounded-3xl bsm:mr-auto font-semibold`}>
                        #VISIT WITHOUT GO
                    </p>
                    <p className={`mt-8  bsm:text-8xl text-5xl font-semibold`}>Shop Smarter,</p>

                    <p className={`mt-8   bsm:text-8xl text-5xl font-semibold`}>Not Harder!</p>


                    <p className='mt-8'>Find what you need with just a few taps, saving time and money effortlessly.</p>
                    <Buttons btnClass={btnClass}>Start Now</Buttons>

                </div>

            </div>

            <div
                className={`md:text-start text-center md:mt-10 mt-4 m-16  smd:pt-6 pt-2 p-2 sm:text-5xl text-2xl font-semibold font-Raleway `}>
                <p>Experience the Convenience of </p>
                <p>Local Shopping with Dukaanear</p>
            </div>
            <div className={`bsm:grid sm:grid-cols-2 sm:gap-12  m-16`}>
                <Card cardClass={cardClass} cardImg={cardImg1} p1='Lorem ipsum dolor sit amet,'
                      p2='consectetur adipiscing elit.' h='Simplify'>
                </Card>
                <Card cardClass={cardClass} cardImg={cardImg2} p1='Lorem ipsum dolor sit amet,'
                      p2='consectetur adipiscing elit.' h='Personalization'>
                </Card>
            </div>
            <div
                className={` m-16 `}>
                <p className={`flex font-bold text-5xl mb-8  bg-contain bg-no-repeat bg-right bsm:bg-[length:50px_50px] bg-[length:30px_30px]`}
                   style={{backgroundImage: `url(${starImg})`}}>Why Choose Dukaanear
                </p>
                <p className={`text-2xl `}>Discover the Benefits of Shopping Smart and Local with Dukaanear.</p>
            </div>
            <div className={`divide-y smd:p-16 divide-lightGray`}>
                <div className={`bsm:grid bsm:grid-cols-3 bsm:divide-x divide-y bsm:divide-y-0 divide-lightGray`}>
                    <>
                        <Cards title="Local Support" img={icon1}
                               description="Empower your local businesses by shopping from nearby retailers."/>
                    </>
                    <>
                        <Cards title="Instant Access" img={icon2}
                               description="Quickly find what you need without leaving your neighborhood."/>
                    </>
                    <>
                        <Cards title="Exclusive Deals" img={icon3}
                               description="Get access to special offers and discounts only available through Dukaanear."/>
                    </>

                </div>

                <div className={`bsm:grid bsm:grid-cols-3  bsm:divide-x  divide-y bsm:divide-y-0 divide-lightGray`}>

                    <Cards title="Time Saving" img={icon4}
                           description="Skip the long trips and shop smart by locating the nearest stores."/>
                    <Cards title="Easy Navigation" img={icon5}
                           description="User-friendly interface makes finding the right store a breeze."/>
                    <Cards title="Tailored Recommendations" img={icon6}
                           description="Personalized suggestions based on your shopping habits and preferences."/>

                </div>
            </div>
            <div className={`p-[72px] `}>
                <div className={`bg-black bsm:p-12 p-8 rounded-3xl flex flex-col`}>
                    <h1 className={`text-white  bsm:text-4  xl bsm:mt-5  font-semibold text-2xl mb-4 text-center bsm:text-start leading-1`}>
                        <p>Experience the convenience of</p>
                        <p>shopping locally with Dukaanear.</p>
                    </h1>
                    <p className={`text-lightGray bsm:text-start text-center bsm:text-xl bsm:mb-4  mb-4`}>Join the Local
                        Shopping Revolution.</p>
                    <Buttons btnClass={btnClass2}>Start Now</Buttons>
                </div>
            </div>

            <OurPartner/>







            <div
                className={` m-16 `}>
                <p className={`flex font-bold text-5xl mb-8  bg-contain bg-no-repeat bg-right bsm:bg-[length:50px_50px] bg-[length:30px_30px]`}
                   style={{backgroundImage: `url(${starImg})`}}>Happy Customers
                </p>
                <p className={`text-xl font-sans`}>Our customers share their experiences and how Dukaanear is
                    transforming their shopping journeys.</p>
            </div>
            <ul className={`bsm:grid bsm:grid-cols-2 mx-16 gap-x-6`}>
                {comments.map((element) => {
                    return <div key={element.id} className={` py-4`}><Reviews element={element}/></div>
                })
                }
            </ul>
            <div className={`bsm:grid bsm:grid-cols-2 bsm:gap-x-6`}>
                <div><img src={balanceCard} alt="Balance Card"/></div>
                <div className={` `}>
                    <div className={`rounded-3xl flex flex-col bsm:pr-20 bsm:p-0 p-10`}>
                        <h1 className={` bsm:text-4  xl bsm:mt-5  font-bold text-4xl mb-4 text-center bsm:text-start leading-1`}>
                            <p>The proven method for </p>
                            <p>less money stress</p>
                        </h1>
                        <p className={`text-lightGray bsm:text-start text-center bsm:text-xl bsm:mb-4  mb-4`}>
                            Make your payments with your preferred method—credit, debit,prepaid, or a bank account.
                            You choose what works best for you.</p>
                        <Buttons btnClass={btnClass3}>Learn More</Buttons>
                    </div>
                </div>
            </div>

            <div className={`bsm:grid bsm:grid-cols-2 bsm:gap-x-6 p-16`}>
                <div className={` `}>
                    <div className={`rounded-3xl flex flex-col bsm:pr-20 bsm:p-0 p-10`}>
                        <h1 className={` bsm:text-4  xl bsm:mt-5  font-bold text-4xl mb-4 text-center bsm:text-start leading-1`}>
                            <p>                            Keeping track of all your money has never been easier
                            </p>

                        </h1>
                        <p className={`text-lightGray bsm:text-start text-center bsm:text-xl bsm:mb-4  mb-4`}>
                            Make your payments with your preferred method—credit, debit, prepaid, or a bank account. You choose what works best for you.</p>
                        <Buttons btnClass={btnClass3}>Learn More</Buttons>
                    </div>
                </div>
                <div><img src={balanceCard} alt="Balance Card"/></div>

            </div>
            <div
                className={` flex justify-center text-center m-20 rounded-3xl bg-gradient-to-b from-lightGreen to-yellow`}>
                <div className={`flex flex-col mt-28 ml-14 mr-14 w-full`}>

                    <p className={` ml-auto mr-auto border pr-6 pl-6 border-black text-center rounded-3xl bsm:mr-auto font-semibold`}>
                        #1 Grocery app in stores
                    </p>
                    <p className={`mt-8 bsm:text-6xl bsm:text-4xl text-2xl font-semibold`}>Download Dukaanear today and experience the ease of local shopping.</p>



                    <p className='mt-8 bsm:text-xl text-md text-semibold'>Ready to Simplify Your Shopping?</p>
                    <Buttons btnClass={btnClass4}>Get the App Now</Buttons>

                </div>

            </div>
<Footer/>
        </>);
}

export default Home;