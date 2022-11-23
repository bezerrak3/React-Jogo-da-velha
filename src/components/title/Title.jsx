import style from "./Title.module.css"

function Title({children}){
    return(
      <h1 className={style.title}>{children}</h1>
    )
}

export default Title