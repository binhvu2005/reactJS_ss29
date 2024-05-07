import React, { useState } from 'react'

export default function B2() {
    const [username, setUsernam]=useState<string>("")
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsernam(e.target.value)
        console.log(username);
        
      }
  return (
    <div>
     <input type="text" onChange={handlechange}/>
    </div>
  )
}
