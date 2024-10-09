
// eslint-disable-next-line react/prop-types
function Buttons({children,btnClass}) {
    return (
        <button className={btnClass}>
            {children}</button>
            );
}

export default Buttons;