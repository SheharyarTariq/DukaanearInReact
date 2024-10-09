import teamMember from "../assets/bgremove.png";

function OurTeamMember({bgColor,titleColor,headingColor}) {
    return (
        <div className={bgColor}>
            <div className={`text-center pt-20 pb-b`}><p className={`text-xl mb-8 mt-2 font-bold ${titleColor} `}>Our
                Team</p>
                <h1 className={`text-5xl font-bold leading-relaxed ${headingColor}`}>All the Experienced Team</h1>
                <h1 className={`text-5xl font-bold  ${headingColor} `}>Together</h1></div>
            <p className={`text-lightGray mt-4 mx-72 text-center px-14`}>Vivamus lectus nibh, mollis eget venenatis a,
                condimentum non purus. Ut eleifend
                suscipit velit, sit amet consectetur odio finibus sed.</p>
            <div className={`bsm:grid bsm:grid-cols-4 mt-5`}>
                <div className={`flex flex-col p-12`}>
                    <div className={`bg-white rounded-3xl `}>
                        <img src={teamMember} alt="Team Member"/></div>
                    <div className={`mt-4  text-center`}>
                        <h1 className={`text-2xl ${headingColor} font-semibold`}>Muhammad Umair</h1>
                        <p className={` text-lightGray text-md`}>Founder Dukaanear (CEO)</p></div>

                </div>
                <div className={`flex flex-col p-12`}>
                    <div className={`bg-white rounded-3xl `}>
                        <img src={teamMember} alt="Team Member"/></div>
                    <div className={`mt-4 text-center`}>
                        <h1 className={`text-2xl ${headingColor} font-semibold`}>Danyal Shakeel</h1>
                        <p className={` text-lightGray text-md`}>Chief Developer (CTO)</p></div>
                </div>
                <div className={`flex flex-col p-12`}>
                    <div className={`bg-white rounded-3xl `}>
                        <img src={teamMember} alt="Team Member"/></div>
                    <div className={`mt-4 text-center`}>
                        <h1 className={`text-2xl ${headingColor} font-semibold`}>Muhammad Ali
                        </h1>
                        <p className={` text-lightGray text-md`}>Chief Finance (CFO)</p></div>
                </div>
                <div className={`flex flex-col p-12`}>
                    <div className={`bg-white rounded-3xl `}>
                        <img src={teamMember} alt="Team Member"/></div>
                    <div className={`mt-4 text-center`}>
                        <h1 className={`text-2xl ${headingColor} font-semibold`}>Asim Ali
                        </h1>
                        <p className={` text-lightGray text-md`}> Chief Marketing (CMO)</p></div>
                </div>


            </div>
        </div>
    );
}

export default OurTeamMember;