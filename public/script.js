const chat = document.getElementById("chat");
const questionInput = document.getElementById("question");
const askButton = document.getElementById("askButton");

//add message to chat box
function addMessage(sender, text, type) {
    const message = document.createElement("div");
    message.classList.add("message", type);

    message.innerHTML = `
        <div class="name">${sender}</div>
        <div class="bubble">${text}</div>
    `;

    //display the message
    chat.appendChild(message);
    //automatically scroll to the latest message
    chat.scrollTop = chat.scrollHeight;
    return message;
}

//send the user's question when they press the button
askButton.addEventListener("click", async () => {
    const question = questionInput.value.trim();
    if (!question)
        return;

    addMessage("♡ You", question, "user");
    //clear the input for the next question
    questionInput.value = "";

    const loading = addMessage("✦ PopicAI", "PopicAI is thinking...", "ai");
    try {
        const response = await fetch("/ask", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question
            })
        });
        //convert json into a javascript object
        const data = await response.json();
        //replace the basic message with the ai response
        loading.querySelector(".bubble").textContent = data.answer;
    }

    catch (error) {
        loading.querySelector(".bubble").textContent =
            "Something went wrong.";
    }

});