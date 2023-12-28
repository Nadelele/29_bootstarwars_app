import React from "react";
import FriendsPhotoGrid from "./FriendsPhotoGrid";

function DreamTeam(){
    return(
        <section className="float-end border border-warning border-1 rounded-bottom" style={{width: 530 + 'px'}}>
        <h2>Dream Team</h2>
        <FriendsPhotoGrid />
        </section>
    )
}

export default DreamTeam;