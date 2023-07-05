const apresentacaoButton = document.getElementById('apresentacao');

apresentacaoButton.addEventListener('click', () => {
  const messageBot = document.getElementById('message-bot');

  // Criar a div com a mensagem de apresentação
  const divApresentacao = document.createElement('div');
  divApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divApresentacao.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3"><b>Apresentação</b></p>
    </div>
  `;
  messageBot.appendChild(divApresentacao);

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
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="empresa">Quem são vocês?</button></li>
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="servico">Quais serviços vocês oferecem?</button></li>
          <li class="mb-2"><button class="me-3 btn btn-outline-secondary" id="arquivo">Em que formato os arquivos são enviados?</button></li>
          <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
        </ul>
      </div>
    </div>
  `;
  messageBot.appendChild(divMensagemAcompanhamento);

  // Rolar suavemente até a nova mensagem de acompanhamento
  divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
});


const messageBot = document.getElementById('message-bot');


messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'empresa') {
    // Criar a div com a mensagem de apresentação
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>Quem são vocês?</b></p>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);

    // Criar a div com a mensagem de acompanhamento
    const divMensagemAcompanhamento = document.createElement('div');
    divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
    divMensagemAcompanhamento.style.overflowWrap = 'break-word';
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">
          Arquitetos especializados em diversos aspectos da arquitetura e design de interiores.
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

    // Rolar suavemente até a nova mensagem de acompanhamento
    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});






messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'servico') {
    // Criar a div com a mensagem de apresentação
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3 text-end"><b>Quais serviços vocês oferecem?</b></p>
      </div>
    `;
    messageBot.appendChild(divMensagemApresentacao);

    // Criar a div com a mensagem de acompanhamento
    const divMensagemAcompanhamento = document.createElement('div');
    divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
    divMensagemAcompanhamento.style.overflowWrap = 'break-word';
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Oferecemos uma ampla gama de serviços, incluindo projetos arquitetônicos, projetos de interiores,
            projeto de prefeitura, projeto de fachada, projetos executivos de interiores.
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

    // Rolar suavemente até a nova mensagem de acompanhamento
    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});



messageBot.addEventListener('click', (event) => {
  if (event.target.id === 'arquivo') {
    // Criar a div com a mensagem de apresentação
    const divMensagemApresentacao = document.createElement('div');
    divMensagemApresentacao.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
    divMensagemApresentacao.innerHTML = `
      <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
          <p class="mt-3 text-end"><b>Em que formato os arquivos são enviados?</b></p>
      </div>
  
    `;
    messageBot.appendChild(divMensagemApresentacao);

    // Criar a div com a mensagem de acompanhamento
    const divMensagemAcompanhamento = document.createElement('div');
    divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
    divMensagemAcompanhamento.style.overflowWrap = 'break-word';
    divMensagemAcompanhamento.innerHTML = `
    <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
        <p class="mt-3">Geralmente, enviamos os arquivos em formatos digitais, 
            como PDF, DWG (AutoCAD), ou imagens em alta resolução, dependendo das necessidades do cliente.
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

    // Rolar suavemente até a nova mensagem de acompanhamento
    divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
  }
});


