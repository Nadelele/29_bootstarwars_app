import React from "react";

function FriendsPhoto(props) {

    return (
        <>
            <img className="grid-item" src={props.src} alt="The friend" />
        </>


    )
}

export default FriendsPhoto;