import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helper/checkWinner";
import Footer from "../../footer/Footer";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

function Grid({ numberOfElement }) {
  const [board, setBoard] = useState(Array(numberOfElement).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  // const [visibleAlert, setVisibleAlert] = useState(false);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    // window.location.reload(); // reload the page to restart game

    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfElement).fill(""));
  }

  return (
    <div className="grid-wrapper">
      <h2 style={{ padding: "1rem", alignItems: "center" }} className="turn">
        Current Turn : {turn ? "O" : "X"}{" "}
      </h2>
      {winner && (
        <>
          <h3 className="turn-highlights" style={{ color: "lightgreen" }}>
            Winner is : {winner}
          </h3>
          
          {/* <Alert variant="info" dismissible>
            <Alert.Heading>Winner is {winner}</Alert.Heading>
          </Alert> */}
        </>
      )}
      <button className="turn-highlights button" onClick={() => reset()}>
            Reset Game
          </button>   

      <div className="turn-highlights">
        <div className="grid">
          {board.map((el, idx) => (
            <Card
              gameEnd={winner ? true : false}
              key={idx}
              onPlay={play}
              player={el}
              index={idx}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>

    
  );
 
}


export default Grid;
