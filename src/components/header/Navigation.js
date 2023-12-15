import React from 'react';
import NavItem from './NavItem';

function Navigation() {
    const NavItemList = ['Home', 'About us', 'Star Wars', 'Contact'];

    return (
        <nav>
            <ul>
                {
                    NavItemList.map((n) => <NavItem element={n} />)
                }
            </ul>
        </nav>
    )
}

export default Navigation;