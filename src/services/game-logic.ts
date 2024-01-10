import {Board, Player} from "../types/board";

export const checkForDrawnGame = (board: Board) => !board.includes(" ")

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
] as const;

export const checkForWinner = (board: Board): Player | undefined => {
    const winningCombination = WINNING_COMBINATIONS.find(isWinningCombination(board));

    if (!winningCombination) {
        return undefined;
    }

    const cell = board[winningCombination[0]];

    if (cell === " ") {
        return undefined;
    }

    return cell;
}

const isWinningCombination = (board: Board) => ([a, b, c]: typeof WINNING_COMBINATIONS[number]) => board[a] !== " " && board[a] === board[b] && board[a] === board[c]

export const getGameOutcome = (board: Board) => {
    const winningPlayer = checkForWinner(board);
    const gameDrawn = checkForDrawnGame(board);

    return !winningPlayer && gameDrawn ? "draw" : winningPlayer;
}