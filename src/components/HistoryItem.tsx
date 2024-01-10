import {History} from "../types/history";
import {HistoryGird} from "./HistoryGird";

type HistoryItemProps = { history: History };

export const HistoryItem = ({history: {board, outcome}}: HistoryItemProps) =>
    <div className="text-white flex flex-col items-center">
        <HistoryGird board={board}/>
        <span>
            {outcome === "draw" ? "The game resulted in a draw" : `The winner was ${outcome}`}
        </span>
    </div>