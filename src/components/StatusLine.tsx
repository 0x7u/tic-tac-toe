import {useGameState} from "./GameState";
import {Switch} from "./Switch";

export const StatusLine = () => {
    const {currentPlayer, outcome, newGame, computerGame, toggleComputerGame} = useGameState()

    return <>
        {outcome === undefined && <div>{currentPlayer}'s turn</div>}
        {outcome === "draw" && <div>The game resulted in a draw</div>}
        {(outcome === "X" || outcome === "O") && <div>The outcome is {outcome}</div>}
        {!!outcome && <button onClick={newGame} className="mt-2 p-2 drop-shadow rounded-xl text-xl bg-[#BD091C]">New
            Game</button>}
        <div className="mt-2">
            <Switch checked={computerGame} onChange={toggleComputerGame}/>
        </div>
    </>;
};