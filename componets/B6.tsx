import React, { useState } from 'react'
export default function B6() {
    const [value, setvalue]= useState<boolean>(true)
    const handleClick = () => {
        setvalue(!value)
    }
  return (
    
    <div>
      <button onClick={handleClick}>{value===true? 'hiện' : 'ẩn'}</button>
    </div>
  )
  
}
