import styles from "./Header.module.css"
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icons from "../icons/Icons"

 function Header(){
  return(
      <div className={styles.header}>
        <Title>Jogo da Velha</Title>
        <Subtitle>Criado por Pedro Victor</Subtitle>
       <div className={styles.iconContent}>
        <Icons iconName="logogit" link={"https://github.com/bezerrak3"}/>
       </div>
     </div>

  )
 }
 export default Header