import {PropsWithChildren} from "react";

type HistoryCellProps = PropsWithChildren<object>;

export const HistoryCell = ({children}: HistoryCellProps) =>
    <div
        className="w-10 h-10 drop-shadow rounded-lg bg-[#BD091C] text-white font-semibold text-lg hover:bg-[#C73131] flex justify-center items-center">{children}</div>