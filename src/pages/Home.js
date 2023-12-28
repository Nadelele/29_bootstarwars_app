import React from 'react';
import DreamTeam from '../components/main/DreamTeam';
import GalaxyImg from '../components/main/GalaxyImg';
import GalaxyText from '../components/main/GalaxyText';
import MainImg from '../Images/main.jpg';


function Home(){
    return(
        <main>
           
                <GalaxyImg src = {MainImg} alt = "Luke Skywalker" />
                <DreamTeam />
                <GalaxyText />
            
        </main>

    )
}

export default Home;