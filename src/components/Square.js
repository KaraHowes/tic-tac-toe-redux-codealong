import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
   // initialising the dispatch, allows us to trigger things within the Redux store
  const dispatch = useDispatch() 

  const handleClick = () => {
    dispatch (game.actions.captureSquare({ index })) // invoking dispatch and passing in the action we want to run, 
    //needs a payload, an object with a key of "index"..... tells Redux we have clicked on square 4, for example. "index"
    // is the key, the values is the number of the square
  }

  return (
    //mainly a button, which will show either an x or o based on which player has captured the square
    // (come from the mounted player component)
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
