import React from "react";

const GameSelector = ({games, onGameSelected}) => {
    const handleChange = event => {
        const chosenGame = games[event.target.value]
        onGameSelected(chosenGame)
    };

    const gameOptions = games.map((game, index) => {
        return <option value={index} key={index}>{game.title}</option>
    });

    return (
        <div className="box">
            <select defaultValue="" onChange={handleChange}>
                <option value="">Select a Game - </option>
                {gameOptions}
            </select>
        </div>
    )
}

export default GameSelector;