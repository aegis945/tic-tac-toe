const DisplayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message; 
    }
    return {
        renderMessage
    }
})();


export default DisplayController;
