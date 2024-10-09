import { NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types

const activeClassName = 'text-green';
// eslint-disable-next-line react/prop-types
function Links({to,children}) {
    return (
<div className=' hover:text-green font-semibold transition duration-200 text-md '>
        <NavLink to={to}
                 className={({ isActive }) =>
            isActive ? activeClassName : undefined

        }
                 >{children}</NavLink></div>
    );
}

export default Links;