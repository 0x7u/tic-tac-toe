import {createContext, PropsWithChildren, useCallback, useContext, useEffect} from "react";
import {Board, Player} from "../types/board.types";
import {getNextPlayer, makeAMove} from "../services/player";
import {getGameOutcome} from "../services/game-logic";
import {getComputerNextMove} from "../services/computer";
import {useLocalStorage} from "usehooks-ts";

type GameStateData = {
    board: Board,
    currentPlayer: Player,
    play: (index: number) => void
    computerGame: boolean
    toggleComputerGame: () => void;
    outcome: Player | "draw" | undefined
    newGame: () => void;
}
export const GameState = createContext<GameStateData | undefined>(undefined);

const INITIAL_BOARD = new Array(9).fill(" ");
const INITIAL_PLAYER = "X";

export const GameStateProvider = ({children}: PropsWithChildren<object>) => {
    const [board, setBoard] = useLocalStorage<Board>("board", INITIAL_BOARD)
    const [currentPlayer, setCurrentPlayer] = useLocalStorage<Player>("currentPlayer", INITIAL_PLAYER)
    const [computerGame, setComputerGame] = useLocalStorage("computerGame", false)
    const [outcome, setOutcome] = useLocalStorage<GameStateData["outcome"]>("outcome", undefined)

    const newGame = () => {
        setBoard(INITIAL_BOARD)
        setCurrentPlayer(INITIAL_PLAYER)
        setOutcome(undefined)
    }

    const play = useCallback<GameStateData["play"]>((index) => {
        if (!!outcome) {
            return;
        }

        const newBoard = makeAMove(board, currentPlayer, index);

        setBoard(newBoard)
        setOutcome(getGameOutcome(newBoard))
        setCurrentPlayer(getNextPlayer(currentPlayer))

    }, [outcome, board, currentPlayer, setBoard, setCurrentPlayer, setOutcome]);

    useEffect(() => {
        if (computerGame && currentPlayer === "O") {
            const computerNextMove = getComputerNextMove(board);

            play(computerNextMove);
        }
    }, [computerGame, currentPlayer, board, play])

    const toggleComputerGame: GameStateData["toggleComputerGame"] = () => setComputerGame(prevState => !prevState);

    return <GameState.Provider
        value={{
            board,
            currentPlayer,
            play,
            computerGame,
            toggleComputerGame,
            outcome,
            newGame
        }}>{children}</GameState.Provider>
}

export const useGameState = () => {
    const gameState = useContext(GameState)

    if (!gameState) {
        throw new Error("Wrap component in GameStateProvider before using useGameState hook")
    }

    return gameState;
}