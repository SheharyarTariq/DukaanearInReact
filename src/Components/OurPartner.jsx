import partner1 from "../assets/ggtes-300x300-1-qt2wvfpb9snehj10m6kz9g3rlhxc8wp3scnuyqe8ko.webp";
import partner2 from "../assets/Gronk-300x300-1-qt2wvgn5gmoot4zngozltxv86vspglsu4hbcg0cueg.webp";
import partner3 from "../assets/ruby.webp";
import partner4 from "../assets/v.webp";
import partner5 from "../assets/9.webp";
import partner6 from "../assets/rose.webp";
import partner7 from "../assets/triangles.webp";

function OurPartner() {
    return (
        <div className={`flex flex-col mt-16`}>
            <h1 className={`bsm:text-5xl bsm:mt-5  font-bold text-2xl mb-4 text-center leading-1 `}>
                Our Partners</h1>
            <p className={`text-md font-medium bsm:mb-14 mb-10 text-center`}>
                We collaborate with leading retailers to bring you the best shopping experience.</p>
            <div
                className={`bsm:flex bsm:justify-between grid grid-cols-3 bsm:space-y-0 gap-y-14 gap-x-14 justify-center mx-24`}>
                <div>
                    <img src={partner1} alt="Partner Company Icon"/></div>
                <div>
                    <img src={partner2} alt="Partner Company Icon"/></div>
                <div>
                    <img src={partner3} alt="Ruby Company Icon"/></div>
                <div className={``}>
                    <img src={partner4} alt="9 Company Icon"/></div>
                <div>
                    <img src={partner5} alt="N Company Icon"/></div>
                <div>
                    <img src={partner6} alt="Rose Company Icon"/></div>
                <img src={partner7} alt="Next Company Icon"/>

            </div>
        </div>
    );
}

export default OurPartner;