import React from "react";
import "../styles/App.css";
import Gallery from 'react-grid-gallery';

const Picture = ({results}) => {
    return(
        <Gallery
            images={results.urls.raw}
        />
    )
}

export default Picture;