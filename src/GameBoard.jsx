import  { useState } from "react";
import "./index.css";

const GameBoard = () => {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isNext,setIsNext] = useState(true);

  function handleClick(i){
    if(squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = isNext?'X':'O';
    setSquares(nextSquares)
    setIsNext(!isNext);
  }

  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let line of lines){
      const [a,b,c] = line;
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  return(

      <div>
            <p className="status">
                {winner ? `Winner: ${winner}` : `Next Player: ${isNext ? "X" : "O"}`}
            </p>
            <div className="board">
              {Array(9).fill(null).map((_, i) => (
              <button key={i} className="square" onClick={() => handleClick(i)}>
              {squares[i]}
              </button>
              ))}
          </div>
      </div>
  )
  
}

export default GameBoard;
