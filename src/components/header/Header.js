import React from 'react';
import Navigation from './Navigation';
import Title from './Title';

const Header = ({ changePage }) => {
    
    return(
        <header>
        <Navigation changePage = {changePage} />
        <Title  title = {changePage} />
        </header>
    )
    }

    export default Header;