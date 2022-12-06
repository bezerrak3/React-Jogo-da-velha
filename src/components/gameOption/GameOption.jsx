import classNames from "classnames"
import style from "./GameOption.module.css"
import Icons from "../icons/Icons"


const gameIcon = ({iconName}) => <Icons iconName={iconName} size="25px"/>

function GameOption({status, onClick, isWinner, isDraw}){
   return(
     <div className={classNames(style.gameOption, {[style.winner]:isWinner,[style.draw]:isDraw})} onClick={onClick}>
      {
        status === 1 && <Icons iconName="circle"/> 
      }
      {
        status === -1 && <Icons iconName="x" />
      }
    </div>
   )
}

export default GameOption