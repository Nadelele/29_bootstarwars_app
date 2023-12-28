import React from "react";
import style from "../../css_modules/BorderRound.module.css"

function FriendsPhoto(props) {

    return (
        <>
        <img className="m-1 p-1" src={props.src} alt="The friend" />
        </>


    )
}

export default FriendsPhoto;