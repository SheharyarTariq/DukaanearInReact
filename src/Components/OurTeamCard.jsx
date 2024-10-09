import Buttons from "./Buttons.jsx";

function OurTeamCard() {
    const btnClass2 ='w-[160px] ml-auto mr-auto bg-gray p-4  h-14 rounded-xl mt-8 font-bold hover:animate-slowBounce hover:bg-green'

    return (
        <div className={`p-16`}>
            <div className={`bg-black bsm:p-12 p-8 rounded-3xl flex flex-col bsm:grid bsm:grid-cols-2`}>
                <div className={`bsm:py-20`}>
                    <h1 className={`text-white  bsm:text-4  text-4xl bsm:mt-5  font-semibold mb-4 text-center bsm:text-start leading-1`}>
                        <p>Ready to join our team?</p>

                        <p>Contact our HR Manager now.
                        </p>
                    </h1>
                    <p className={`text-lightGray bsm:text-start text-center bsm:text-xl bsm:mb-4  mb-4`}>Our recruiter
                        will answer you shortly.</p>
                </div>
                <div className={`flex w-full bsm:content-center bsm:justify-center bsm:py-20 `}>
                    <Buttons btnClass={btnClass2}>Submit Your CV</Buttons>
                </div>
            </div>
        </div>);
}

export default OurTeamCard;