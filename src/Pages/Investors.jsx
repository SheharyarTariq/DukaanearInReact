import Footer from "./Footer/Footer.jsx";
import Buttons from "../Components/Buttons.jsx";

function Investors() {
    return (
        <div>
            <div>
                <div className={`text-center pt-20 `}><p className={`text-xl mb-8 mt-2 font-bold  `}>INVESTOR
                    PROGRAM</p>
                    <h1 className={`text-6xl font-bold leading-relaxed `}>Invest in the Future of</h1>
                    <h1 className={`text-6xl font-bold   `}>Local Commerce</h1></div>
                <p className={`text-lightGray mt-4 mx-72 text-center px-14 leading-relaxed pt-10 pb-16`}>Join us in
                    revolutionizing how people shop locally by connecting communities
                    with their nearest retailers.</p>
            </div>
            <div
                className={` flex justify-center text-center m-20 rounded-3xl bg-gradient-to-b from-lightGreen to-yellow`}>
                <div className={`flex flex-col mt-28 ml-14 mr-14 w-full`}>

                    <p className={` ml-auto mr-auto border w-1/3 p-2 border-black text-center rounded-3xl bsm:mr-auto font-semibold`}>
                       COMING SOON
                    </p>
                    <p className={`mt-8 bsm:text-5xl  text-2xl font-bold`}>Dukaanear is preparing to launch an
                        exclusive investor program.</p>


                    <p className='mt-4 bsm:text-lg text-md text-semibold mb-24  '>Stay tuned for opportunities to invest in the future of local commerce.
                    </p>

                </div>

            </div>


            <Footer/>
        </div>
    );
}

export default Investors;