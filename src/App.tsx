import React from 'react';
import {Board} from "./components/Board";
import {GameStateProvider} from "./components/GameState";

export default function App() {
    return (
        <div className="bg-[#1F252E]">
            <GameStateProvider>
                <Board/>
            </GameStateProvider>
        </div>
    );
}

