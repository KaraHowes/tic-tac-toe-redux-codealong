import React from 'react'
import { useSelector } from'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
 
  // To use the selector hook we need to pass in a function.
  //To fetch the squares out we need to use this function:
  //the squares function takes entire store from Redux and returns something from that store. it is an implicit return
  const squares = useSelector((store)=> store.game.squares)
  // Maps over the squares and renders a square component for each square
  return (
    <div className="board"> 
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
