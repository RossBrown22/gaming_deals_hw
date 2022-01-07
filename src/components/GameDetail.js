import React from "react";

const GameDetail = ({game}) => {

    return (
        <>
            <h1 className="sale">Sale Price: £{game.salePrice}</h1>
            <h2 className="usual">Usual Price: £{game.normalPrice}</h2>
            <h3 className="percentage2">{game.savings}%</h3>
            <h3 className="percentage">SAVED!</h3>
            <h3 className="review">Gamers Opinion:</h3>
            <h3 className="review2">{game.steamRatingText}</h3>
        </>
    )
}

export default GameDetail;