import {getComputerNextMove} from './computer';
import {Board} from "../types/board.types";

describe('getComputerNextMove', () => {
    test('it should return a valid move on an empty board', async () => {
        const board: Board = Array(9).fill(" ");
        const move = getComputerNextMove(board);

        expect(move).toBeGreaterThanOrEqual(0);
        expect(move).toBeLessThanOrEqual(8);
    });

    test('it should return a valid move on a partially filled board', async () => {
        const board: Board = [
            " ", " ", " ",
            "O", "X", " ",
            "O", "X", " "
        ];

        const move = getComputerNextMove(board);

        expect([0, 1, 2, 5, 8]).toContain(move);
    });

    test('it should return undefined if there are no available moves', async () => {
        const board: Board = [
            "O", "X", "O",
            "X", "O", "X",
            "O", "X", "O"
        ];

        const move = getComputerNextMove(board);

        expect(move).toBeUndefined();
    });
});