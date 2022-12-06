import { useState, useEffect } from "react"
import GameOption from "../gameOption/GameOption"
import style from "./Game.module.css"
import GameInfo from "../gameinfo/Gameinfo"


const verifyWinner = [ // linhas possíveis de vitória || 3 honrizontais, 3 verticais, 2 diagonais
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

 function Game(){
  const [gameState, setGameState] = useState(Array(9).fill(0)) // criação do tabuleiro - array de 9 posições, todos começando em 0(fill)
  const [currentPlayer, setCurrentPlayer ] = useState(1) // criação do jogador
  const [winner, setWinner] = useState(0) // função para verificar campeão
  const [winnerLine, setWinnerLine] = useState([])

  const handleClick = (pos) =>{
    if(gameState[pos] === 0 && winner === 0 ){ //verificação: 1- se o espaço estiver preenchido com bola(-1) ou "x"(1) não se pode alterar| 2- Quando a função setWinner for diferente de 0 não se pode alterar
      let newGameState = [...gameState] // forma utilizada para copiar o gameState
      newGameState[pos] = currentPlayer 
      
      setGameState(newGameState)

    }
  }
  
   const verifyGame = () => {
     verifyWinner.forEach((line)=>{
        const values = line.map((pos)=> gameState[pos]) // troca(map) as posições dos arrays, pelos cliques dos jogadores e acumula
        const sum = values.reduce((sum, value)=> sum+ value) // soma os cliques dos jogadores
        if(sum === 3 || sum === -3){ 
        setWinner(sum/3) // verificação de vencedor
        setWinnerLine(line)} // verificação de linha vencedora
     })
   }
   
   const handleReset = () => {
     setGameState(Array(9).fill(0))
     setWinner(0)
     setWinnerLine([])
    
  }

   const verifyWinnerLine = (pos) => 
     winnerLine.find((value) => value === pos) !== undefined // essa funcão verifica se as posições do gameOption(0 a 8) são iguais as da linha campeã


   useEffect(() => { // hook para fazer verificação, sem interações do usuário. ex: chamada de api pra ser carregada, verificação de player atual
     setCurrentPlayer(currentPlayer * -1) // função para alterar o player
     verifyGame()
   }, [gameState])
     
     return(

      <div className={style.gameContent}>
         <div className={style.game}>
           {
             gameState.map((value, pos) => <GameOption key={`game-option-pos-${pos}`} status={value} onClick={() => handleClick(pos)} isWinner={verifyWinnerLine(pos)}/>)

           }
         </div>
         <GameInfo currentPlayer={currentPlayer} winner={winner} onReset={handleReset} />
      </div>
        
     )
 }

 export default Game