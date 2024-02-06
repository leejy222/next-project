'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


function BoardList() {

  useEffect(() => {
    getBoard();
  }, [])
  
  const [board, setBoard] = useState([]);
  const router = useRouter();
  const baseUrl = '/board';
  async function getBoard () {
    const response = await fetch("/api/board", {
      method: "GET"
    })

    setBoard(await response.json() ?? []);
  }

  return (
    <div>
      <table>
        <tbody>
              <tr>
                  <td>번호</td>
                  <td>제목</td>
                  <td>내용</td>
              </tr>
          {
            board.map((item:BoardType,index:number) =>{
              return (
                <tr key={index}>
                  <td onClick={()=> router.push(`${baseUrl}/${item.no}`,{ scroll: true})}>{ item.no.toString() }</td>
                  <td>{ item.title }</td>
                  <td>{ item.content }</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;