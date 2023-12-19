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

    const getGameboard = () => {
        return gameboard;
    }

    const checkForWin = (board) =>  {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i];
            if(board[a] && board[a] === board [b] && board[a] === board[c]){
                return true;
            }
        }
        return false;
    }

    const checkForTie = (board) => {
        return board.every(cell => cell !== "");
    }

    return {
        renderGameboard,
        update,
        getGameboard,
        checkForWin,
        checkForTie
    }
})();

export default Gameboard;
