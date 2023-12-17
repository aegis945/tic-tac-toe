import Player from './player.js';
import Gameboard from './gameboard.js';

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            Player(document.querySelector("#player1").value, "X"),
            Player(document.querySelector("#player2").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.renderGameboard();
    }

    const handleSquareClick = (event) => {
        let squareIndex = parseInt(event.target.id.split("-")[1]);
        Gameboard.update(squareIndex, players[currentPlayerIndex].mark);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    return {
        start,
        handleSquareClick
    }

})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Game.start();
})

export default Game;
