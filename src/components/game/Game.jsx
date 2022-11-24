import { useState } from "react"
import GameOption from "../gameOption/GameOption"
import style from "./Game.module.css"

 function Game(){
     const [gameState, setGameState] = useState(Array(9).fill(0))
     return(
        <div className={style.game}>
         {
          gameState.map((value,pos)=> <GameOption
           key={`game-option-pos-${pos}`} 
           status={value}
           />)

         }   
        </div>
     )
 }

 export default Game