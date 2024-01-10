export type Player = "X" | "O"

export type CellValue = " " | Player;

export type Board = CellValue[]

export type Outcome = Player | "draw"