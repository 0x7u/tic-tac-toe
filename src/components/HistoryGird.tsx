import {Board} from "../types/board";
import {HistoryCell} from "./HistoryCell";

type HistoryGridProps = { board: Board };

export const HistoryGird = ({board}: HistoryGridProps) =>
    <div className="p-4 grid grid-cols-3 gap-1 flex-wrap justify-center">
        {board.map((value, index) => <HistoryCell key={index}>{value}</HistoryCell>)}
    </div>