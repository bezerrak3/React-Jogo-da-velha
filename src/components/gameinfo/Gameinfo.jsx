import style from "./Gameinfo.module.css"
import Icons from "../icons/Icons"
import Button from "../button/Button"

function GameInfo({currentPlayer, winner, onReset}) {

    const shouldEnableButton = () =>{
        if(winner !== 0) return true
    }
    return (
    <div className={style.gameInfo}>
    {
        winner === 0 && 
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
        winner !== 0 && 
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
    <Button onClick={onReset} disabled={!shouldEnableButton()}>
        <h2>New Game</h2>
    </Button>
    </div>
    )
}

export default GameInfo