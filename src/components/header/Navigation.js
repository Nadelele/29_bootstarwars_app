import React from 'react';
import NavItem from './NavItem';
import { NavItemList } from '../../utils';

const Navigation = ({ changePage }) => {
    //const NavItemList = ['Home', 'About us', 'Star Wars', 'Contact'];
        
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {
                    NavItemList.map((n) => <NavItem changePage={changePage} element={n} key={n} />)
                }
            </ul>
        </nav>
    )
            
}

export default Navigation;