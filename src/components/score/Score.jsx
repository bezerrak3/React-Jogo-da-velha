import Icons from "../icons/Icons"
import style from "./Score.module.css"

function Score ({scoreb,scorex}){
  
  return(
      <>
        <h4 className={style.placar}>Scoreboard </h4>
        <div className={style.score}>
        <div className={style.scoreContent}>
          <Icons iconName="circle"/>
          <p>{scoreb}</p>
          
        </div>
        <div className={style.scoreContent}>
          <Icons iconName="x"/>
          <p>{scorex}</p>    
        </div>
      </div> 
     </>
  )
}

export default Score