import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils';

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState(undefined);


    useEffect(() => {
    if(localStorage.getItem('hero')) {
        setHero(JSON.parse(localStorage.getItem('hero')).payload); 
        setIsLoading(false)
    } else{
        fetch(`${BASE_URL}/v1/peoples/1`)
            .then((res) => res.json())
            .then((data) => {
                setHero(data); 
                const info = {
                    payload:data,
                    time: Date.now()
                };
                localStorage.setItem('hero', JSON.stringify(info))
                setIsLoading(false)});
            }
    }, [])

    return (
   
        isLoading ? <p> Is Loading, please wait</p> :
        hero && <div className='ms-3'>
                <h1>About Us</h1>
                <img src={`${BASE_URL}/${hero.image}`} alt={hero.name} />
                <p>Gender: {hero.gender}</p>
                <p>Height: {hero.hight}</p>
                <p>Mass: {hero.mass}</p>
                <p>Hair color: {hero.hair_color}</p>
                <p>Skin color: {hero.skin_color}</p>
                
            </div>
    )
}

export default AboutUs;