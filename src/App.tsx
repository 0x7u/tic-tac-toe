import React from 'react';
import {Board} from "./components/Board";
import {GameStateProvider} from "./components/GameState";
import {HistoryList} from "./components/HistoryList";

export default function App() {
    return (
        <div className="bg-[#1F252E] min-h-screen">
            <GameStateProvider>
                <Board/>
            </GameStateProvider>
            <HistoryList/>
        </div>
    );
}

