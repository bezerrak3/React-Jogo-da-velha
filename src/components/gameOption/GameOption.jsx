
import style from "./GameOption.module.css"
import Icons from "../icons/Icons"


const gameIcon = ({iconName}) => <Icons iconName={iconName} size="25px"/>

function GameOption({status, onClick}){
   return(
    <div className={style.gameOption} onClick={onClick}>
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