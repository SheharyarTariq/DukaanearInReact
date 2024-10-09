import Footer from "./Footer/Footer.jsx";
import groupImg from "../assets/groupImg.webp"
import "animate.css/animate.compat.css"
import groupImg1 from "../assets/groupIMG1.webp"
import groupImg2 from "../assets/groupImg2.webp"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {useState} from "react";
import Buttons from "../Components/Buttons.jsx";
import OurPartner from "../Components/OurPartner.jsx";
// import teamMenber from "../assets/bgremove.png"
import OurTeamMember from "../Components/OurTeamMember.jsx";
import OurTeamCard from "../Components/OurTeamCard.jsx";
// import ScrollAnimation from 'react-animate-on-scroll';

function AboutUs() {
const [counterOn, setCounterOn] =useState(false);
    const cardBtnClass='mt-8 bg-black text-white rounded-xl p-2 pl-4 pr-4 hover:animate-slowBounce';

    return (<>
            <div>
                <div
                    className={` flex justify-center text-center bg-gradient-to-b from-lightGreen to-white`}>
                    <div className={`flex flex-col mt-28 ml-14 mr-14 w-full mb-32   `}>

                        <p className={` ml-auto mr-auto pr-6 pl-6 text-center text-xl bsm:mr-auto font-bold`}>
                            ABOUT US
                        </p>
                        <p className={`mt-8 bsm:text-6xl text-2xl font-bold`}>We make it all</p>

                        <p className={`mt-8 bsm:text-6xl text-2xl font-bold`}>happen</p>


                        <p className='mt-8 text-semibold  text-lightGray'>Vivamus lectus nibh, mollis eget venenatis a,
                            condimentum non purus. Ut eleifend
                        </p><p className={`text-lightGray`}>
                        suscipit velit, sit amet consectetur odio finibus sed.</p>

                    </div>

                </div>
                <div className={``}><img src={groupImg} alt="group img" className={'w-full'}/></div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className={`bsm:grid bsm:grid-cols-3 bsm:mb-32 mb-20 mt-8 w-full text-center`}>
                        <div className={`mb-4`}>
                            <div className="text-6xl font-semibold">

                                <h1>
                                    {counterOn && <CountUp end={4} start={0} duration={3}/>
                                    }+</h1>

                            </div>
                            <p>TEAM MEMBERS</p></div>
                        <div className={`mb-4`}>
                            <div className="text-6xl font-semibold">

                                <h1>
                                    {counterOn && <CountUp end={10} start={0} duration={3}/>
                                    }+</h1>

                            </div>
                            <p>TRUSTED PARTNERS</p></div>
                        <div>
                            <div className="text-6xl font-semibold">

                                <h1>
                                    {counterOn && <CountUp end={0} start={0} duration={3}/>
                                    }+</h1>

                            </div>
                            <p>ACTIVE USERS</p></div>
                    </div>

                </ScrollTrigger>

                <div className={`bsm:grid bsm:grid-cols-2 `}>


                    <div className={`px-16`}><p className={`text-xl font-bold leading-10`}>WHO ARE WE ¿</p>
                        <h1 className={`text-4xl font-bold leading-relaxed`}>We are one of the
                            world’s leaders</h1>
                        <div>
                            <img src={groupImg1} alt="group img" className={`rounded-3xl`}/>
                        </div>
                    </div>

                    <div className={`bsm:my-0 my-14`}>
                        <div className={`px-16 bsm:p-0 `}>
                            <div className={`flex`}>
                                <i className="bi bi-check-circle items-center flex mr-4 text-3xl"
                                   style={{color: "green",}}></i>
                                <h1 className={'text-2xl font-semibold leading-loose'}>Trusted company</h1>
                            </div>
                            <p className={`text-lightGray ml-12 mb-4 mt-4`}>We are recognized as one of the world's
                                leaders in this field. Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className={`px-16 bsm:p-0 `}>
                            <div className={`flex`}>
                                <i className="bi bi-check-circle items-center flex mr-4 text-3xl"
                                   style={{color: "green",}}></i>
                                <h1 className={'text-2xl font-semibold leading-loose'}>Trusted company</h1>
                            </div>
                            <p className={`text-lightGray ml-12 mb-4 mt-4`}>We are recognized as one of the world's
                                leaders in this field. Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className={`px-16 bsm:p-0 `}>
                            <div className={`flex`}>
                                <i className="bi bi-check-circle items-center flex mr-4 text-3xl"
                                   style={{color: "green",}}></i>
                                <h1 className={'text-2xl font-semibold leading-loose'}>Trusted company</h1>
                            </div>
                            <p className={`text-lightGray ml-12 mb-4 mt-4`}>We are recognized as one of the world's
                                leaders in this field. Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className={`px-16 bsm:p-0 `}>
                            <div className={`flex`}>
                                <i className="bi bi-check-circle items-center flex mr-4 text-3xl"
                                   style={{color: "green",}}></i>
                                <h1 className={'text-2xl font-semibold leading-loose'}>Trusted company</h1>
                            </div>
                            <p className={`text-lightGray ml-12 mb-4 mt-4`}>We are recognized as one of the world's
                                leaders in this field. Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit.</p>
                        </div>
                        <div className={`px-16 bsm:p-0 `}>
                            <div className={`flex`}>
                                <i className="bi bi-check-circle items-center flex mr-4 text-3xl"
                                   style={{color: "green",}}></i>
                                <h1 className={'text-2xl font-semibold leading-loose'}>Trusted company</h1>
                            </div>
                            <p className={`text-lightGray ml-12 mb-4 mt-4`}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed at ligula a orci pretium fringilla. Nam in quam mi. Nam ut velit
                                libero. In hac habitasse platea dictumst. Nulla facilisi. Vivamus dictum tristique
                                turpis, non faucibus massa auctor ac.</p>
                        </div>


                    </div>

                </div>


                <div className={`bsm:grid bsm:grid-cols-2 mt-20`}>


                    <div className={`px-16`}>

                        <img src={groupImg2} alt="group img" className={`rounded-3xl`}/>

                    </div>


                    <div className={`bsm:my-0 my-14 px-20 bsm:pr-20 bsm:pl-0 `}>
                        <p className={`text-xl font-bold leading-10`}>WHO ARE WE ¿</p>
                        <h1 className={`text-4xl font-bold leading-relaxed`}>We are helping your
                            company be successful
                            online</h1>

                        <p className={`text-lightGray mb-4 mt-4`}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed at ligula a orci pretium fringilla. Nam in quam mi. Nam ut velit
                            libero. In hac habitasse platea dictumst. Nulla facilisi. Vivamus dictum tristique turpis,
                            non faucibus massa auctor ac.</p>
                        <Buttons btnClass={cardBtnClass}>Learn More
                        </Buttons>

                    </div>

                </div>

                <OurTeamCard></OurTeamCard>
               <OurTeamMember bgColor='bg-darkBlue' titleColor='text-green' headingColor='text-white' />

                <OurPartner />
                <div className={`m-12`}></div>
                <Footer/>
            </div>
        </>
    );
}

export default AboutUs;