const chatMessages = document.querySelector('.chat-messages');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    addMessage('Você', userMessage);

    // Enviar mensagem para o ChatGPT-3
    fetch('https://api.openai.com/v1/engine/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 50,
            temperature: 0.7
        })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].text.trim();
        addMessage('ChatGPT-3', botMessage);
    })
    .catch(error => {
        console.error(error);
    });

    userInput.value = '';
});

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
}
