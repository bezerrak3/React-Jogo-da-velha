import Icons from "../icons/Icons"
import style from "./Score.module.css"

function Score (){
  return(
      <>
       <h4>Placar: </h4>
       <div className={style.score}>
        <div className={style.scoreContent}>
          <Icons iconName="circle"/>
          <h2>0</h2>
        </div>
        <div className={style.scoreContent}>
          <Icons iconName="x"/>
          <h2>0</h2>
        </div>
      </div> 
      </>
  )
}

export default Score