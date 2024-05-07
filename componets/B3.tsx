import React, { useState } from 'react'
export default function B3() {
    const [date, setDte]=useState<string>("")
    const handleDate=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDte(e.target.value)
        console.log("ngày",date);
        
    }
  return (
    <div>
      <input type="date" onChange={handleDate}/>
    </div>
  )
}
