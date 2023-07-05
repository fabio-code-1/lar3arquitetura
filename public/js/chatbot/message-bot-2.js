const orcamentoButton = document.getElementById('orcamentoPreco');

orcamentoButton.addEventListener('click', () => {
  const messageBot = document.getElementById('message-bot');

  // Criar a div com a mensagem de apresentação
  const divOrcamento = document.createElement('div');
  divOrcamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divOrcamento.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3"><b>Orçamento e Preços</b></p>
    </div>
  `;
  messageBot.appendChild(divOrcamento);

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
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="orcamento">O orçamento é gratuito?</button></li>
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="preco">O preço de vocês é bom?</button></li>
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="parcela">Vocês parcelam o serviço?</button></li>
          <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
        </ul>
      </div>
    </div>
  `;
  messageBot.appendChild(divMensagemAcompanhamento);

  // Rolar suavemente até a nova mensagem de acompanhamento
  divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
});



// Orcamento
messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'orcamento') {
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>O orçamento é gratuito?</b></p>
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
          Sim, oferecemos orçamentos gratuitos para avaliar o escopo do projeto.
        </p>
        <div class="opcao">
          <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Orçamento Aqui!</a></li>
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



// preco
messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'preco') {

    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>O preço de vocês é bom?</b></p>
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
        Nossos preços são competitivos e justos, levando em consideração a qualidade dos serviços prestados, a complexidade do projeto e as necessidades específicas do cliente.
        </p>
        <div class="opcao">
          <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Orçamento Aqui!</a></li>
            <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
          </ul>
        </div>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);
    messageBot.appendChild(divMensagemAcompanhamento);

    // Rolar suavemente até a nova mensagem de acompanhamento
    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});


// parcela
messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'parcela') {
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>Vocês parcelam o serviço?</b></p>
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
          Sim, parcelamos no cartão de crédito em até 6x e também parcelamos no boleto 21/45
        </p>
        <div class="opcao">
          <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Orçamento Aqui!</a></li>
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

