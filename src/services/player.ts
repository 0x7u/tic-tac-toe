import {Board, Player} from "../types/board.types";

export const makeAMove = (board: Board, player: Player, cellIndex: number): Board => {
    if (board[cellIndex] !== " ") {
        return board
    }

    const newBoard = [...board];

    newBoard[cellIndex] = player

    return newBoard
}

export const getNextPlayer = (lastPayer: Player): Player => {
    return lastPayer === "X" ? "O" : "X"
}