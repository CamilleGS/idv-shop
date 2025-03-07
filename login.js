// Função para validar o email com regex
function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

// Função para validar o formulário antes de enviar
function validarFormulario(event) {
    // Impede o envio do formulário para evitar o erro HTTP 405
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação do email
    if (!validarEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false; // Impede a execução de qualquer código posterior
    }

    // Validação da senha (opcional)
    if (senha.trim() === "") {
      alert("Por favor, insira sua senha.");
      return false; // Impede a execução de qualquer código posterior
    }

    // Se tudo estiver correto, exibe um alert de sucesso
    alert("Login validado com sucesso!");

    // Redireciona para a página index.html diretamente
    window.location.href = '/index.html';

    // Retorna true para que o código posterior (se necessário) seja executado
    return false;
}
