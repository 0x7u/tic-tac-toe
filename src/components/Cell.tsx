import {useGameState} from "./GameState";

type CellProps = { index: number };

export const Cell = ({index}: CellProps) => {
    const {board, play} = useGameState();

    const cellDisabled = board[index] !== " "

    return (
        <button id={`cell-${index}`} className="w-24 h-24 drop-shadow rounded-2xl bg-[#BD091C] text-white font-semibold text-2xl hover:bg-[#C73131]" onClick={() => play(index)} disabled={cellDisabled}>
            {board[index]}
        </button>
    );
};
