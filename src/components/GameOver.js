import React from "react";
import gameOver from "../img/events/game-over.png"
import useSound from 'use-sound';
import { gameOverFail } from '../sounds';

function GameOver(props) {
  const [playGameOverFail, gameOverFailSoundData] = useSound(gameOverFail, {
    soundEnabled: props.audioOn,
    volume: 0.25,
    interrupt: true
  });

  if (!props.audioOn) {
    gameOverFailSoundData.stop();
  } else if (props.isGameOver) {
    // setTimeout hack to place playGameOverWin() in back of event queue 
    setTimeout(() => playGameOverFail(), 0);
  }
  return (
    props.isGameOver &&
    props.i === props.selectedAction && (
      <div id="game-over" className="game-over-modal">
        <div className="img-wrap">
          <img src={gameOver} alt="" />
        </div>
        <p> {props.message}</p>
        <h1>Game Over</h1>
        <div className="btn-wrap">
          {" "}
          <a href="/">
            <button className="backToHomeBtn">Restart the Game </button>
          </a>
        </div>
      </div>
    )
  );
}
export default GameOver;
