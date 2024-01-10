import {Board} from "../types/board";

export const getComputerNextMove = (board: Board) => {
    const availableMoves: number[] = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === " ") {
            availableMoves.push(i);
        }
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);

    return availableMoves[randomIndex];
}