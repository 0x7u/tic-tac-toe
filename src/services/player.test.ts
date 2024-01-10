import {makeAMove} from './player';
import {Board, Player} from "../types/board";

describe('makeAMove', () => {

    test('It should not modify the board if the cell is already occupied', async () => {
        const player: Player = "X";
        const board: Board = [" ", "X", " ", " ", " ", " ", " ", " ", " "];
        const cellIndex = 1;

        const newBoard = makeAMove(board, player, cellIndex);

        expect(newBoard).toEqual(board);
    });

    test('It should correctly modify the board when the cell is empty', async () => {
        const player: Player = "X";
        const board: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        const cellIndex = 0;
        const expectedBoard: Board = ["X", " ", " ", " ", " ", " ", " ", " ", " "];

        const newBoard = makeAMove(board, player, cellIndex);

        expect(newBoard).toEqual(expectedBoard);
    });
});