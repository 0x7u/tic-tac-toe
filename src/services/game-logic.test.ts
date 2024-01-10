import {checkForWinner} from './game-logic';
import {Board} from "../types/board";

describe('checkForWinner', () => {

    test('should return the winning combination if one exists', async () => {
        const board: Board = ["X", "X", "X", " ", " ", " ", " ", " ", " "];

        const result = checkForWinner(board);

        expect(result).toBe("X");
    });

    test('should return blank if there is no winning combination', async () => {
        const board: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

        const result = checkForWinner(board);

        expect(result).toBe(undefined);
    });

    test('should work as expected with different combinations', async () => {
        const board: Board = ["O", " ", " ", " ", "O", " ", " ", " ", "O"];

        const result = checkForWinner(board);

        expect(result).toBe("O");
    });
});