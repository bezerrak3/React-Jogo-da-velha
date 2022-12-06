import style from "./Gameinfo.module.css"
import Icons from "../icons/Icons"
import Button from "../button/Button"

function GameInfo({currentPlayer, winner, onReset, isDraw}) {


    const shouldEnableButton = () =>{
        if(winner !== 0) return true
        if(isDraw) return true
    }
    return (
    <div className={style.gameInfo}>
    {
        !isDraw && winner === 0 && 
        <>
          <h4>Próximo a jogar:</h4>
         {
            currentPlayer === 1 && <Icons iconName="circle" />
        }
        {
            currentPlayer === -1 && <Icons iconName="x" />
        }
                    
        </>
    }    
    {
        !isDraw && winner !== 0 && 
        <>
         <h4>Fim de jogo! Campeão:</h4>
        {
        winner === 1 && <Icons iconName="circle"/>
        }
        {
        winner === -1 && <Icons iconName="x" />
        }
       </>
    }
    {
       isDraw && <h4>Empate!</h4>
    }
    <Button onClick={onReset} disabled={!shouldEnableButton()}>
        <h2>New Game</h2>
    </Button>
    </div>
    )
}

export default GameInfo