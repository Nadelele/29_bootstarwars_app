import React from 'react';


function NavItem(props){
    
    
    return(
    <li className="nav-item btn btn-danger mx-1 btn-sm border-warning border-2">{props.element}</li>
        )
}

export default NavItem;