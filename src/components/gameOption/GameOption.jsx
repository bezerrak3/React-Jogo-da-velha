
import style from "./GameOption.module.css"
import Icons from "../icons/Icons"


const gameIcon = ({iconName}) => <Icons iconName={iconName} size="25px"/>

function GameOption({status}){
   return(
    <div className={style.gameOption}>
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