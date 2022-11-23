import GameOption from "../gameOption/GameOption"
import style from "./Game.module.css"

 function Game(){
     return(
        <div className={style.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />

        </div>
     )
 }

 export default Game