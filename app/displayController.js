const DisplayController = (() => {
    const messageElement = document.querySelector("#message");

    const renderMessage = (message) => {
        messageElement.innerHTML = message;
        messageElement.classList.add("active");
        setTimeout(() => {
            messageElement.classList.remove("active");
        }, 5000);
    };

    return {
        renderMessage
    }
})();

export default DisplayController;
