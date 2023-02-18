import React from 'react'

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='w-40 h-40 border-2 border-black flex items-center justify-center'>{props.value}</div>
  )
}

export default Square