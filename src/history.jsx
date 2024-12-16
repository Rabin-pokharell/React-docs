import Button from "./button.jsx"
import {useState} from 'react'

function History (){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }
    return(
        <div className="game">
            <div className="game-board">
                <Button xIsNext={xIsNext} squares={currentSquares} onplay ={handlePlay}/>
            </div>
            <div className="game-info">
                <ol></ol>
            </div>
        </div>
        
    );
}

export  default History