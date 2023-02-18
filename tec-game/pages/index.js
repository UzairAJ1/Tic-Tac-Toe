import Head from 'next/head'
import Image from 'next/image'
import Square from '@/src/components/Square'
import { useState } from 'react'
import { rule } from 'postcss'

export default function Home() {
const [state,setState]=useState(Array(9).fill(null))
const [isxturn,setIsxturn]=useState(false);
const handlesubmit =(index)=>
{
  console.log("clicked on :", index);
  const copystate=[...state];
  copystate[index]= isxturn?'X':'O';
  setState(copystate);
  setIsxturn(!isxturn);
  
}
const checkwinner=()=>
{
  const winnerlogic=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let logic of winnerlogic)
  {
    const [a,b,c]=logic;
    if(state[a] !== null && state[a]===state[b] && state[a]===state[c])
    {
      return true;
    }
   
  }
  return false;
}
const iswinner=checkwinner();
console.log("winner is",iswinner);
   
  
  return (
    <>
  {iswinner && <h1>You have won</h1> }
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='grid grid-cols-3'>
       <Square onClick={()=>{handlesubmit(0)}} value={state[0]}/>
       <Square onClick={()=>{handlesubmit(1)}} value={state[1]}/>
       <Square onClick={()=>{handlesubmit(2)}} value={state[2]}/>
       <Square onClick={()=>{handlesubmit(3)}} value={state[3]}/>
       <Square onClick={()=>{handlesubmit(4)}} value={state[4]}/>
       <Square onClick={()=>{handlesubmit(5)}} value={state[5]}/>
       <Square onClick={()=>{handlesubmit(6)}} value={state[6]}/>
       <Square onClick={()=>{handlesubmit(7)}} value={state[7]}/>
       <Square onClick={()=>{handlesubmit(8)}} value={state[8]}/>
        </div>
      </div>
    </>
  )
}
