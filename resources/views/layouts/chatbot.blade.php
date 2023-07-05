<button class="chat btn btn-danger border border-danger d-flex align-items-center justify-content-center" id="chat-button">
  <img src="icons/chat-dots-fill.svg" alt="chat" width="25px" class="me-2">
  <p class="m-0 text-light">Contate-nos</p>
</button>

<div id="chat-container">
  <p class="text-center"><b>Lar3Arquitetura</b></p>
  <button id="close-button" class="bnt btn-danger">&times;</button>
  <hr class="mt-0">

  <button class="me-2 btn btn-outline-dark btn-sm mb-2" id="limparChat">
    <img src="icons/vassoura-voadora.png" alt="chat" width="25px" class="me-1">
    Limpar Chat
  </button>
  <div id="bot-content">
    <div id="message-bot" class="">
      <div class="line-message mb-2 d-flex align-items-start mensagem-inicial">
        <img src="icons/robot.svg" alt="chat" class="mt-3 mx-3">
        <div class="d-flex flex-column">
          <p class="mt-3 ">Como posso ajudar você?</p>
          <div class="opcao">
            <ul class="list-unstyled d-flex flex-wrap">
              <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="apresentacao">Apresentação</button></li>
              <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="orcamentoPreco">Orçamento e Preços</button></li>
              <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="prazo">Prazos e Atendimento</button></li>
              <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="projeto">Projetos</button></li>
              <li class="mb-2"><button class="me-2 btn btn-outline-secondary" id="referencia">Referências</button></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <input type="text" class="form-control mt-2" id="chat-input" placeholder="Digite sua mensagem">
    <button id="send-button">Enviar</button>
  </div>

  <div id="whats-content">
    <div id="message-whats" class="mb-2">
      <p class="m-4">Estamos disponíveis no WhatsApp de segunda a sábado, das 09:00 às 18:00. Será um prazer receber seu contato.</p>
      <a href="https://wa.me/5511981664628?text=Olá%2C%20eu%20vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento" class="btn btn-success m-4">Abrir WhatsApp <img src="icons/arrow-up-right-from-square-solid.svg" alt="chat" width="15px"></a>
    </div>
  </div>
  <div id="interruptor" class="mt-1 p-1">
    <div class="row">
      <div class="col-6">
        <button class="bot btn btn-outline-light btn-sm w-100" onclick="toggleContent('bot')">
          <img src="icons/chat-dots.svg" alt="chat" width="20px" class="me-2">
        </button>
      </div>
      <div class="col-6">
        <button class="whats btn btn-outline-light btn-sm w-100" onclick="toggleContent('whats')">
          <img src="icons/whatsapp.svg" alt="whats" width="20px">
        </button>
      </div>
    </div>
  </div>
</div>