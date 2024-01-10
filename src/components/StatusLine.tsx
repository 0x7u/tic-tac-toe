import {useGameState} from "./GameState";
import {Switch} from "./Switch";

export const StatusLine = () => {
    const {currentPlayer, winner, newGame, computerGame, toggleComputerGame} = useGameState()

    return <>
        {winner === undefined && <div>{currentPlayer}'s turn</div>}
        {winner === "draw" && <div>The game resulted in a draw</div>}
        {(winner === "X" || winner === "O") && <div>The winner is {winner}</div>}
        {!!winner && <button onClick={newGame} className="mt-2 p-2 drop-shadow rounded-xl text-xl bg-[#BD091C]">New
            Game</button>}
        <div className="mt-2">
            <Switch checked={computerGame} onChange={toggleComputerGame}/>
        </div>
    </>;
};