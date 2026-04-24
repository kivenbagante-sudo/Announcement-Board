function postAnnouncement() {
    let messageInput = document.getElementById("messageInput");
    let outputBox = document.getElementById("outputBox");

    let message = messageInput.value.trim();

    if (message === "") {
        outputBox.innerText = "⚠ Please enter a message first.";
        return;
    }

    outputBox.innerText = message;

    
    messageInput.value = "";
}