
function Cards({img, title,description}) {
    return (
        <div className={`flex flex-col p-4 bsm:text-start text-center bsm:items-start items-center`}>
            <img src={img} alt={description} className={`w-[100px] h-[100px]`}/>
            <h1 className={`font-semibold mt-6 mb-6 text-3xl`}>{title}</h1>
            <p className={`text- text-lightGray`}>{description}</p>
        </div>
    );
}

export default Cards;