import React from "react";

function GalaxyImg(props){
    return(
        <section className="left">
        <img src = {props.src} alt={props.alt} />
        </section>
    )
}

export default GalaxyImg;