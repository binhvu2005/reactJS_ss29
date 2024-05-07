import React, { useState } from 'react'

export default function B4() {
    const [tinh, setTinh]=useState("")
const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTinh(e.target.value)
    console.log('tỉnh :',tinh)
}
  return (
    <div>
      <select name="" id="" onChange={handleChange}> 
       <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option></select>
     
    </div>
  )
}
