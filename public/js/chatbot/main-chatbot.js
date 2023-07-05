const chatButton = document.querySelector('.chat');
const chatContainer = document.querySelector('#chat-container');
const closeButton = document.querySelector('#close-button');


chatButton.addEventListener('click', () => {
    chatButton.style.visibility = 'hidden';
    chatContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    chatButton.style.visibility = 'visible';
    chatContainer.style.display = 'none';
});


function toggleContent(type) {
    const botButton = document.querySelector('.bot');
    const whatsButton = document.querySelector('.whats');

    if (type === 'bot') {
        document.getElementById('bot-content').style.display = 'block';
        document.getElementById('whats-content').style.display = 'none';
        botButton.classList.add('active');
        whatsButton.classList.remove('active');
    } else if (type === 'whats') {
        document.getElementById('bot-content').style.display = 'none';
        document.getElementById('whats-content').style.display = 'block';
        botButton.classList.remove('active');
        whatsButton.classList.add('active');
    }
}


// Inicialmente, exibir o conteúdo do bot
toggleContent('bot');

