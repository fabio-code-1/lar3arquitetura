const ProjetoButton = document.getElementById('projeto');

ProjetoButton.addEventListener('click', () => {
  const messageBot = document.getElementById('message-bot');

  // Criar a div com a mensagem de apresentação
  const divProjeto = document.createElement('div');
  divProjeto.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divProjeto.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3"><b>Referências</b></p>
    </div>
  `;
  messageBot.appendChild(divProjeto);

  // Criar a div com a mensagem de acompanhamento
  const divMensagemAcompanhamento = document.createElement('div');
  divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
  divMensagemAcompanhamento.style.overflowWrap = 'break-word';
  divMensagemAcompanhamento.innerHTML = `
    <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3">Oferecemos uma ampla gama de serviços, incluindo projetos arquitetônicos, projetos de interiores, projeto de prefeitura, projeto de fachada, projetos executivos de interiores.</p>
      <div class="opcao">
        <ul class="list-unstyled d-flex flex-wrap">
        <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Projeto Aqui!</a></li>
          <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="voltar">Voltar Início</button></li>
        </ul>
      </div>
    </div>
  `;
  messageBot.appendChild(divMensagemAcompanhamento);

  // Rolar suavemente até a nova mensagem de acompanhamento
  divMensagemAcompanhamento.scrollIntoView({ behavior: 'smooth' });
});