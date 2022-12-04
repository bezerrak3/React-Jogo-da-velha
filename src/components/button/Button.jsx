import style from "./Button.module.css"

function Button({children, onClick,disabled}){
    return(
      <button className={style.button} onClick={onClick} disabled={disabled}>
       {children}
      </button>
    )
}

export default Button