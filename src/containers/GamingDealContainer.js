import React, { useState, useEffect } from "react";
import GameSelector from "../components/GameSelector";
import GameDetail from "../components/GameDetail";

const GamingDealContainer = () => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null)

    const getGamingDeals = () => {
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
            .then(res => res.json())
            .then(games => setGames(games))
    };

    useEffect(() => {
        getGamingDeals();
    }, [])

    const onGameSelected = (game) => {
        setSelectedGame(game)
    }

    return (
        <>
            <GameSelector games={games} onGameSelected={onGameSelected}/>
            {selectedGame ?<GameDetail game={selectedGame} /> : null}
        </>
    )

};

export default GamingDealContainer;