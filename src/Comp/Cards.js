import React from "react";

const Card=()=> {
     return(
        <>
        <div className="movie">
                <img src="images/Barbieimg.jpg" className="poster"></img>
                <div className="movie-details">
                    <div classroom="box">
                        <h4 className="title">Barbie</h4>
                        <p className="rating">8.9</p>
                    </div>
                    <div className="overview"></div>
                    <h1>overview</h1>
                    Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.
                </div>
            </div>
        </>
     )
}

export default Card;
