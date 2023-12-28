import React from 'react';


const NavItem = ({ element, changePage }) => {
    const onClickHandler = () => changePage(element);
    return (
        <li onClick={onClickHandler} className="nav-item btn btn-danger mx-1 btn-sm border-warning border-2">{element}</li>
    )
}


export default NavItem;