import React from 'react';
import { NavItemList } from '../../utils';
import AboutUs from '../../pages/AboutUs';
import Contacts from '../../pages/Contacts';
import StarWars from '../../pages/StarWars';
import Home from '../../pages/Home';

const Main = ({ currentPage }) => {
    switch (currentPage) {
        case NavItemList[1]:
            return <AboutUs />;

        case NavItemList[2]:
            return <StarWars />;

        case NavItemList[3]:
            return <Contacts />;


        default:
            return <Home />;
    }

}

export default Main;