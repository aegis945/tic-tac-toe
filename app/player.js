const Player = (name, mark) => {
    if (name === '') {
        console.log('Invalid player name. Please enter a valid name.');
        return null;
    } return {
        name: name,
        mark
    };
};

export default Player;
