'use client'
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from 'next/navigation';

type Props = { id:number };


function BoardDetail({id}: Props) {
  const [detailData, setDetailData] = useState({} as BoardType);
  const router = useRouter();
  const param = useParams();
  
  async function getDetail () {
    const response = await fetch(`/api/board/${param.id}`, {
      method: "GET"
    })

    setDetailData(await response.json() ?? {});
  }

  useEffect(() => {
    getDetail();
  }, [])

  

  return (
    <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
      This is board Page
      <div className="flex">
        <p>{  detailData.title }</p> |
        <p>{  detailData.content }</p>
        
        
      </div>
    </div>
  );
}

export default BoardDetail;