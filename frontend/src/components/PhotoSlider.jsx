import React from "react";

const PhotoSlider = (props) => {
    return (
        <td>
            <img src={props.image} alt={props.name} className="image-small"/>
        </td>
    );

}
export default PhotoSlider