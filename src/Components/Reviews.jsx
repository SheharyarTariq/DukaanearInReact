// eslint-disable-next-line react/prop-types
function Reviews({element}) {

    // eslint-disable-next-line react/prop-types

    // eslint-disable-next-line react/prop-types

    return (

        <div className={`bg-black text-white rounded-2xl p-8 h-full`}>

            {/* eslint-disable-next-line react/prop-types */}
                <p className={`text-white text-2xl`}>{element.comment}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={`text-lightGray font-semibold mt-5 text-md`}>{element.name}
                </p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={`text-green`}>{element.designation}</p>
            </div>
    );
}

export default Reviews;