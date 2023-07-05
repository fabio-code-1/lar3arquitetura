const sendButton = document.getElementById('send-button');
const chatInput = document.getElementById('chat-input');

// Função para enviar a mensagem
function sendMessage() {
  // Obter o valor do campo de entrada
  const userMessage = chatInput.value.toLowerCase(); // Converter a mensagem para minúsculas para facilitar a comparação

  // Criar a div com a mensagem do usuário
  const divUserMessage = document.createElement('div');
  divUserMessage.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start', 'flex-row-reverse');
  divUserMessage.style.overflowWrap = 'break-word';
  divUserMessage.innerHTML = `
    <img src="icons/person-circle.svg" alt="chat" class="mt-3 mx-3">
    <div class="d-flex flex-column">
      <p class="mt-3" id="p-person"><b>${userMessage}</b></p>
    </div>
  `;
  messageBot.appendChild(divUserMessage);

  // Criar a div com a mensagem de acompanhamento
  const divMensagemAcompanhamento = document.createElement('div');
  divMensagemAcompanhamento.classList.add('line-message', 'mb-2', 'd-flex', 'align-items-start');
  divMensagemAcompanhamento.style.overflowWrap = 'break-word';

  if (userMessage.toLowerCase().includes('orçamento') || userMessage.includes('orcamento') || userMessage.includes('1')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Sim, oferecemos orçamentos gratuitos para avaliar o escopo do seu projeto. Entre em contato conosco pelo WhatsApp e teremos prazer em ajudar.</p>
          <div class="opcao">
            <ul class="list-unstyled d-flex flex-wrap">
            <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Orçamento Aqui!</a></li>
            </ul>
          </div>   
      </div>
    `;
  } else if (userMessage.toLowerCase().includes('prazo') || userMessage.includes('2')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">O prazo de entrega pode variar dependendo da complexidade do projeto e do escopo de trabalho envolvido. Ao analisar suas necessidades específicas, podemos estabelecer um prazo razoável para a conclusão do projeto.</p>
      </div>
    `;
  }else if (userMessage.toLowerCase().includes('atendem') || userMessage.includes('região') || userMessage.includes('regiao') || userMessage.includes('lugar') || userMessage.includes('3')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Atendemos todas as Regiões do Brasil</p>
      </div>
    `;
  }
  else if (userMessage.toLowerCase().includes('referências') || userMessage.includes('referência') || userMessage.includes('referencias') || userMessage.includes('referencia') || userMessage.includes('7')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Possuímos dezenas de clientes em todo o estado com 100% de satisfação.</p>
      </div>
    `;
  }
  else if (userMessage.toLowerCase().includes('preço') || userMessage.includes('preco') || userMessage.includes('valor') || userMessage.includes('valores') || userMessage.includes('4')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Nossos preços são competitivos e justos, levando em consideração a qualidade dos serviços prestados, a complexidade do projeto e as necessidades específicas do cliente.</p>
      </div>
    `;
  }    
  else if (userMessage.toLowerCase().includes('serviço') || userMessage.includes('serviços') || userMessage.includes('servico') || userMessage.includes('servico') || userMessage.includes('projetos') || userMessage.includes('projeto') || userMessage.includes('5')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Oferecemos uma ampla gama de serviços, incluindo projetos arquitetônicos, projetos de interiores, projeto de prefeitura, projeto de fachada, projetos executivos de interiores.</p>
          <div class="opcao">
            <ul class="list-unstyled d-flex flex-wrap">
              <li class="mb-2"><a href="https://lar3arquitetura.com.br/form" class="me-2 btn btn-outline-secondary">Projeto Aqui!</a></li>
            </ul>
          </div>
      </div>
    `;
  }
  else if (userMessage.toLowerCase().includes('arquivo') || userMessage.includes('arquivos') || userMessage.includes('png') || userMessage.includes('jpg') || userMessage.includes('pdf') || userMessage.includes('6')) 
  {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">Geralmente, enviamos os arquivos em formatos digitais, como PDF, DWG (AutoCAD), ou imagens em alta resolução, dependendo das necessidades do cliente.</p>
      </div>
    `;
  }
  else {
    divMensagemAcompanhamento.innerHTML = `
      <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
      <div class="d-flex flex-column">
        <p class="mt-3">
        Desculpe, não consegui encontrar nenhum resultado correspondente à sua pesquisa. Aqui estão algumas sugestões que podem ajudar a refinar sua pesquisa. Tente pesquisar por:
          <ol>
              <li><b>Orçamento</b></li>
              <li><b>Prazo</b></li>
              <li><b>Região</b></li>
              <li><b>Preços</b></li>
              <li><b>Projetos</b></li>
              <li><b>Arquivos Entregues</b></li>
              <li><b>Referências</b></li>
          </ol>
        </p>
      </div>
    `;
  }

  messageBot.appendChild(divMensagemAcompanhamento);

  // Limpar o campo de entrada após enviar a mensagem
  chatInput.value = '';

  // Rolar suavemente até a nova mensagem do usuário
  divUserMessage.scrollIntoView({ behavior: 'smooth' });
}

// Evento de clique no botão de envio
sendButton.addEventListener('click', sendMessage);

// Evento de teclado no campo de entrada
chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Impedir que a tecla Enter cause quebra de linha no campo de entrada
    event.preventDefault();

    // Chamar a função de envio da mensagem
    sendMessage();
  }
});
