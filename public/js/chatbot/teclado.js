// Verificar se o dispositivo é um dispositivo móvel
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Verificar o status do teclado móvel
function checkMobileKeyboardStatus() {
  if (isMobileDevice()) {
    var sendButton = document.getElementById('send-button');
    var chatInput = document.getElementById('chat-input');

    chatInput.addEventListener('focus', function() {
      sendButton.disabled = true;
      sendButton.classList.add('disabled');
    });

    chatInput.addEventListener('blur', function() {
      sendButton.disabled = false;
      sendButton.classList.remove('disabled');
    });
  }
}

// Verificar o status do teclado móvel no carregamento da página
checkMobileKeyboardStatus();