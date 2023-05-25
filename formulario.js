const formulario = document.querySelector('form');

function formularioEnviado(resposta){
  if(resposta.ok){
    formulario.innerHTML = "<p style='display: flex; flex-direction: column; justify-content: center; align-items: center;, padding: 40px; border-radius: 4px; background: #f7f7f7; font-size: 36px;color: #b2b2b2;'><span style='color: #1C5EA7; font-size: 44px;'> Formulário enviado com sucesso!</span> Em breve entraremos em contato.</p>"
  } else {
    formulario.innerHTML = "<p style='display: flex; flex-direction: column; justify-content: center; align-items: center;, padding: 1rem; border-radius: 4px; background: #f7f7f7; font-size: 36px;color: #b2b2b2;'><span style='color: #E00000; font-size: 44px;'>Erro no envio,</span> você pode enviar diretamente para o nosso e-mail em: contatosleadselis@gmail.com</p>"
  }
}

function enviarFormulario(event){
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);