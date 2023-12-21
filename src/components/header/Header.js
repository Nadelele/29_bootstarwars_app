import React from 'react';
import Navigation from './Navigation';
import Title from './Title';

function Header(){
    return(
        <header>
        <Navigation />
        <Title  title = 'Luke Skywalker' />
        </header>
    )
}

export default Header;