import React from 'react';
import NavItem from './NavItem';

function Navigation() {
    const NavItemList = ['Home', 'About us', 'Star Wars', 'Contact'];

    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {
                    NavItemList.map((n) => <NavItem element={n} />)
                }
            </ul>
        </nav>
    )
}

export default Navigation;