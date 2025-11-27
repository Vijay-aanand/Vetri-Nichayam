import React, { useState } from 'react'
import Confetti from 'react-confetti';

function Usestate()
{
   const[num1,setnum1]=useState("")
const[num2,setnum2]=useState("")
const[result,setresult]=useState("")

const add=()=>(setresult(Number(num1)+Number(num2)))
const sub=()=>(setresult(Number(num1)-Number(num2)))
const multiply=()=>(setresult(Number(num1)*Number(num2)))
const division=()=>(setresult(Number(num1)/Number(num2)))
const sqrt=()=>(setresult(Math.sqrt(Number(num1)) ))
const quotient=()=>(setresult(Number(num1)%Number(num2)))
const pie=()=>(setresult(Math.PI                   * Number(num1)))

return(
  <div>
    <h1>Simple Calculator</h1>
    <input type="number" placeholder='Enter your Number' value={num1} onChange={(e)=>setnum1(e.target.value)} />
    <input type="number" placeholder='Enter your Number' value={num2} onChange={(e)=>setnum2(e.target.value)} />
    <br /><br />
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={multiply}>*</button>
    <button onClick={division}>/</button>
    <button onClick={sqrt}>√</button>
    <button onClick={quotient}>%</button>
    <button onClick={pie}>π</button>


    <h3>Result: {result}</h3>
  </div>
)
}
export default Usestate
