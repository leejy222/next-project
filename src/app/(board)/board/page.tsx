import React, { useEffect } from "react";
import BoardList from "./boardList";

type Props = {};


function Board({}: Props) {
  return (
    <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
      This is board Page
        <BoardList />
    </div>
  );
}

export default Board;