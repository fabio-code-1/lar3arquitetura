document.addEventListener('click', (event) => {
  if (event.target.matches('#voltar') || event.target.matches('#limparChat')) {
    const messageBot = document.getElementById('message-bot');

    // Remover apenas as mensagens geradas dinamicamente
    const messages = document.querySelectorAll('.line-message:not(.mensagem-inicial)');
    messages.forEach((message) => {
      message.remove();
    });

    // Obter o elemento com o texto "Como posso ajudar você?"
    const helpText = document.querySelector('.mt-3');

    // Rolar suavemente até o elemento "Como posso ajudar você?"
    helpText.scrollIntoView({ behavior: 'smooth' });
  }
});
