import DisplayController from "./displayController.js";

const Player = (name, mark, playerIndex) => {
    if (name === '') {
        DisplayController.renderMessage(`Invalid player ${playerIndex + 1} name. Please enter a valid name.`);
        return null;
    } return {
        name: name,
        mark
    };
};

export default Player;
