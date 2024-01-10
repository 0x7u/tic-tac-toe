import React from 'react';
import {Board} from "./components/Board";
import {GameStateProvider} from "./components/GameState";

export default function App() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Tic Tac Toe
            </h1>
            <GameStateProvider>
                <Board/>
            </GameStateProvider>
        </div>
    );
}

