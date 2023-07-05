const referenciaButton = document.getElementById('referencia');

referenciaButton.addEventListener('click', () => {
  const messageBot = document.getElementById('message-bot');

  // Criar a div com a mensagem de apresentação
  const divReferencia = document.createElement('div');
  divReferencia.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divReferencia.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3"><b>Referências</b></p>
    </div>
  `;
  messageBot.appendChild(divReferencia);

  // Criar a div com a mensagem de acompanhamento
  const divMensagemAcompanhamento = document.createElement('div');
  divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
  divMensagemAcompanhamento.style.overflowWrap = 'break-word';
  divMensagemAcompanhamento.innerHTML = `
    <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3">Possuímos dezenas de clientes em todo o estado com 100% de satisfação.</p>
      <div class="opcao">
        <ul class="list-unstyled d-flex flex-wrap">
          <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
        </ul>
      </div>
    </div>
  `;
  messageBot.appendChild(divMensagemAcompanhamento);

  // Rolar suavemente até a nova mensagem de acompanhamento
  divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
});