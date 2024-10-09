
// eslint-disable-next-line react/prop-types
import Buttons from "./Buttons.jsx";

// eslint-disable-next-line react/prop-types
function Card({cardImg,cardClass,p1,p2,h}) {
    const cardBtnClass='mt-8 bg-black text-white rounded-xl p-2 pl-4 pr-4 hover:animate-slowBounce';

    return (
        <div className={cardClass} style={{ backgroundImage: `url(${cardImg})`}} >
            <h1 className={`font-semibold bsm:text-4xl text-2xl`}>{h}</h1>
            <p className={`text-lightGray mt-6 bsm:text-normal text-sm`}>{p1}
            </p>
            <p className={`text-lightGray`}>{p2}

        </p>
            <Buttons btnClass={cardBtnClass}>Learn More
            </Buttons>
        </div>
    );
}

export default Card;