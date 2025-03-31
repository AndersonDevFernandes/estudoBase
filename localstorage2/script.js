// Função para cadastrar um novo usuário
function cadastrar() {
    // Obtém os valores dos campos do formulário
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !senha) {
        alert('Preencha todos os campos!');
        return;
    }

    // Cria um objeto usuário
    let usuario = { nome, email, senha };

    // Obtém os usuários armazenados no localStorage ou cria um array vazio se não houver
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Adiciona o novo usuário ao array
    usuarios.push(usuario);

    // Salva o array atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Exibe um alerta de sucesso
    alert('Cadastro realizado com sucesso!');

    // Redireciona para a página de login
    window.location.href = 'index.html';
}

// Função para realizar o login
function logar() {
    // Obtém os valores do formulário de login
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Obtém os usuários armazenados no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário existe e se a senha está correta
    let usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioValido) {
        alert('Login realizado com sucesso!');
        // Redireciona para a página principal após o login
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}
