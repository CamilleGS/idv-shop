document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Pegando os valores do formulário
    let nome = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;

    // Verifica se já existe o e-mail cadastrado
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioExiste = usuarios.some(usuario => usuario.email === email);

    if (usuarioExiste) {
        alert("Este e-mail já está cadastrado. Tente outro!");
        return;
    }

    // Criando o novo usuário
    let novoUsuario = { nome, email, senha };

    // Salvando no localStorage
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    
    // Redireciona para a página de login
    window.location.href = "/login.html";
});
