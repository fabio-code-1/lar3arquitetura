const prazoButton = document.getElementById('prazo');

prazoButton.addEventListener('click', () => {
  const messageBot = document.getElementById('message-bot');

  // Criar a div com a mensagem de apresentação
  const divPrazo = document.createElement('div');
  divPrazo.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divPrazo.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3"><b>Prazos e Atendimentos</b></p>
    </div>
  `;
  messageBot.appendChild(divPrazo);

  // Criar a div com a mensagem de acompanhamento
  const divMensagemAcompanhamento = document.createElement('div');
  divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
  divMensagemAcompanhamento.style.overflowWrap = 'break-word';
  divMensagemAcompanhamento.innerHTML = `
    <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3">Sobre o que você deseja saber mais?</p>
      <div class="opcao">
        <ul class="list-unstyled d-flex flex-wrap">
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="prazoentrega">Qual prazo de entrega?</button></li>
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="cidade">Quais cidades vocês atendem?</button></li>
          <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
        </ul>
      </div>
    </div>
  `;
  messageBot.appendChild(divMensagemAcompanhamento);

  // Rolar suavemente até a nova mensagem de acompanhamento
  divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
});



// prazo
messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'prazoentrega') {
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>Qual prazo de entrega?</b></p>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);

    const divMensagemAcompanhamento = document.createElement('div');
    divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
    divMensagemAcompanhamento.style.overflowWrap = 'break-word';
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">
        O prazo de entrega pode variar dependendo da complexidade do projeto e do escopo de trabalho envolvido. Ao analisar suas necessidades específicas, podemos estabelecer um prazo razoável para a conclusão do projeto.
        </p>
        <div class="opcao">
          <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
          </ul>
        </div>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);
    messageBot.appendChild(divMensagemAcompanhamento);

    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});


// cidade
messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'cidade') {
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>Quais cidades vocês atendem?</b></p>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);

    const divMensagemAcompanhamento = document.createElement('div');
    divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
    divMensagemAcompanhamento.style.overflowWrap = 'break-word';
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">
        Atendemos todas as Regiões do Brasil.
        </p>
        <div class="opcao">
          <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
          </ul>
        </div>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);
    messageBot.appendChild(divMensagemAcompanhamento);

    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});