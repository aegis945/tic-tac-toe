import Game from './game.js'

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const renderGameboard = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        });
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const gameboardSquares = document.querySelectorAll(".square");
        gameboardSquares.forEach(square => {
            square.addEventListener("click", Game.handleSquareClick);
        })
    }

    const update = (squareIndex, value) => {
        gameboard[squareIndex] = value;
        renderGameboard();
    }

    const getGameboardLength = () => {
        return gameboard.length;
    }

    return {
        renderGameboard,
        update,
        getGameboardLength
    }
})();

export default Gameboard;
