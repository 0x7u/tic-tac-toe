import {useLocalStorage} from "usehooks-ts";
import {History} from "../types/history";
import {HistoryItem} from "./HistoryItem";

export const HistoryList = () => {
    const [history] = useLocalStorage<History[]>('game-history', [])

    return <div className="flex flex-col items-center py-24">
        {history.map((value, index) => <HistoryItem key={index} history={value}/>)}
    </div>
}