import React from "react";

type Props = { id:string };





function board({}: Props) {
  return (
    <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
      This is board Page
      <div className="flex">
        상세화면
      </div>
    </div>
  );
}

export default board;