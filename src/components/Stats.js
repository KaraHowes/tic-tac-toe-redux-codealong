import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { game } from 'reducers/game' // imports a reducer, we will dispatch an action to it
import { Player } from 'components/Player'


export const Stats = () => {

  const dispatch = useDispatch() //need to use this in every component where you want to use dispatch
  const winner = useSelector((store) => store.game.winner)// from store. This variable will be whatever the value in the store is......
  const nextPlayer = useSelector((store) => store.game.player) //returns whoeever turn it is next

  const handleButtonPress = () => {
   dispatch(game.actions.restart()) // this allows us to restart the game, doesn't need a payload 
  }

  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>Start new game</button>
      </div>
    )
  }

  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </div>
  )
}
