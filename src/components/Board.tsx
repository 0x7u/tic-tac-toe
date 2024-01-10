import {useGameState} from "./GameState";
import {Cell} from "./Cell";
import {StatusLine} from "./StatusLine";

export const Board = () => {
    const {board} = useGameState()

    return <div className="flex flex-col justify-center items-center pt-32 text-white">
        <div className="p-8 grid grid-cols-3 gap-4 flex-wrap justify-center">
            {board.map((_, index) => <Cell key={index} index={index}/>)}
        </div>
        <StatusLine/>
    </div>
};