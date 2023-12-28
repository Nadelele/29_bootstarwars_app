import React from "react";

function GalaxyImg(props){
    return(
        <section className="float-start">
        <img src = {props.src} alt={props.alt} />
        </section>
    )
}

export default GalaxyImg;