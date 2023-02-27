








<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	
		const chatHistory = document.getElementById("chat-history");
		const chatInput = document.getElementById("chat-input");
		const sendBtn = document.getElementById("send-btn");

		// Substitua YOUR_API_KEY pela sua chave de API do OpenAI
		const apiKey = "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";

		// Inicia uma nova conversa com o ChatGPT-3
		axios.post("https://api.openai.com/v1/conversations", {
			api_key apikey,
			model: "text-davinci-002",
			temperature: 0.7,
			max_tokens: 60
		})
		.then(response => {
			const conversationId = response.data.conversation_id;
			console.log("Conversa iniciada: " + conversationId);

			// Quando o bot receber uma mensagem, adiciona a mensagem na área de chat
			function onBotMessage(message) {
				chatHistory.innerHTML += "<p><strong>Bot:</strong> " + message + "</p>";
			}

			// Quando o usuário enviar uma mensagem, envia a mensagem para o ChatGPT-3 e exibe a resposta na área de chat
			function onUserMessage() {
				const message = chatInput.value;
				chatInput.value = "";

				chatHistory.innerHTML += "<p><strong>Você:</strong> " + message + "</p>";

				axios.post("https://api.openai.com/v1/conversations/" + conversationId + "/messages", {
					api_key: apiKey,
					text: message
				})
				.then(response => {
					const message = response.data.messages[0].text;
					onBotMessage(message);
				})
				.catch(error => {
					console.error(error);
				});
			}

			// Event listener para quando o usuário clicar no botão "Enviar"
			sendBtn.addEventListener("click", onUserMessage);

			// Event listener para quando o usuário pressionar Enter na caixa de entrada
			chatInput.addEventListener("keydown", event => {
				if (event.keyCode === 13) {
					onUserMessage();
				}
			});

			// Exibe uma mensagem de boas-vindas na área de chat
			onBotMessage("Olá! Eu sou o ChatGPT-3. Em que posso ajudá-lo hoje?");
		})
		.catch(error => {
			console.error(error);
		});
	
