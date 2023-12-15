import React from 'react';
import Friends from './DreamTeam';
import GalaxyImg from './GalaxyImg';
import GalaxyText from './GalaxyText';
import MainImg from '../../Images/main.jpg'


function Header(){
    return(
        <main>
           
                <GalaxyImg src = {MainImg} alt = "Luke Skywalker" />
                <Friends />
                <GalaxyText />
            
        </main>

    )
}

export default Header;