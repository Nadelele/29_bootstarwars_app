import React from "react";
import FriendsPhoto from "./FriendsPhoto";
let listOfImages = [];

class FriendsPhotoGrid extends React.Component {


    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('/public/Images/friends/', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return (
            <div className="d-flex flex-wrap px-2">
                {
                    listOfImages.map(
                        (image, index) => <FriendsPhoto key = {index} src={image}  />
                    )
                }
            </div>
        )
    }
    
}

export default FriendsPhotoGrid;