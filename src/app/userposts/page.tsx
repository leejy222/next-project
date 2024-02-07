'use client'

import React, { useRef, useState } from 'react'
import * as process from 'process'

export default function UserPosts() {

  const count1 = useRef(1)
  const [count2, setCount2] = useState(1);

  async function test() {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user/1`)
    console.log(await response.json());
  }

  test();

  return (
    <div>
      UserPosts
      <div>
        count1 : { count1.current }
        <button className="btn btn-primary" onClick={ () => count1.current + 1 }>더하기</button>
      </div>
      <div>
        count2 : { count2 }
        <button className="btn" onClick={ () => setCount2(count2 + 1) }>더하기</button>
      </div>
      <button className="btn" onClick={ () => alert(`count1 = ${count1.current}, count2 = ${count2}`) }>더하기</button>
    </div>
  )
}
