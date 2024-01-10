import {useGameState} from "./GameState";

type CellProps = { index: number };

export const Cell = ({index}: CellProps) => {
    const {board, play} = useGameState();

    const cellDisabled = board[index] !== " "

    return (
        <button id={`cell-${index}`} className="border border-black bg-blue-200 p-4" onClick={() => play(index)} disabled={cellDisabled}>
            {board[index]}
        </button>
    );
};
