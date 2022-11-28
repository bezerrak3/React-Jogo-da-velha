import { useState } from "react"
import GameOption from "../gameOption/GameOption"
import style from "./Game.module.css"
import Icons from "../icons/Icons"

 function Game(){
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer ] = useState(1)
  const handleClick = (pos) =>{
    if(gameState[pos] === 0){
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setCurrentPlayer(currentPlayer * -1)
      setGameState(newGameState)

    }
     
  }
     
     return(

      <div className={style.gameContent}>
         <div className={style.game}>
           {
             gameState.map((value, pos) => <GameOption
               key={`game-option-pos-${pos}`}
               status={value}
               onClick={() => handleClick(pos)}
             />)

           }
         </div>
         <div className={style.gameInfo}>
          <h4>Próximo a jogar:</h4>
          {
            currentPlayer === 1 && <Icons iconName="circle"/>
          }
           {
             currentPlayer === -1 && <Icons iconName="x" />
           }

         </div>
      </div>
        
     )
 }

 export default Game