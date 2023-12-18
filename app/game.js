import Player from './player.js';
import Gameboard from './gameboard.js';

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        const playerOne = Player(document.querySelector("#player1").value, "X");
        const playerTwo = Player(document.querySelector("#player2").value, "O");

        players = [playerOne, playerTwo]
        currentPlayerIndex = 0;
        gameOver = false;    
        Gameboard.renderGameboard();
    }

    const handleSquareClick = (event) => {
        let squareIndex = parseInt(event.target.id.split("-")[1]);
        if(event.target.innerHTML === ""){
            Gameboard.update(squareIndex, players[currentPlayerIndex].mark);
            currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        }
    }

    const restart = () => {
        for(let i = 0; i < Gameboard.getGameboardLength(); i++ ) {
            Gameboard.update(i, "");
        }
    }

    return {
        start,
        restart,
        handleSquareClick
    }

})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    Game.restart();
})

export default Game;
