import {useGameState} from "./GameState";
import {Cell} from "./Cell";

export const Board = () => {
    const {board, currentPlayer, winner, computerGame, toggleComputerGame, newGame} = useGameState()

    return <div>
        <input type="checkbox" checked={computerGame} onChange={toggleComputerGame}/> Computer plays as O?
        {!winner ? <div>Current player : {currentPlayer}</div> : <div>The winner is : {winner} <button onClick={newGame}>New Game</button></div>}
        <div className="grid grid-cols-3">
            {board.map((_, index) => <Cell key={index} index={index}/>)}
        </div>
    </div>
};