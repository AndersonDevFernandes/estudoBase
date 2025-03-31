// Função para gerar o número de registro
function gerarNumeroRegistro(dataNascimento) {
    let anoAtual = new Date().getFullYear();
    let dataRegistro = new Date().toISOString().split('T')[0].replace(/-/g, '');
    let dataNascFormatada = dataNascimento.replace(/-/g, '');
    return `${anoAtual}${dataNascFormatada}${dataRegistro}`;
}

// Função para cadastrar o usuário
function cadastrar() {
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let email = document.getElementById('email').value;

    if (!nome || !dataNascimento || !email) {
        alert('Preencha todos os campos!');
        return;
    }

    let registro = gerarNumeroRegistro(dataNascimento);
    let usuario = { nome, dataNascimento, email, registro };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`Cadastro realizado! Seu número de registro é: ${registro}`);
    window.location.href = "index.html";
}

// Função para buscar usuário pelo número de registro
function login() {
    let registro = document.getElementById('loginUser').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let usuarioEncontrado = usuarios.find(user => user.registro === registro);

    if (usuarioEncontrado) {
        mostrarModal(usuarioEncontrado);
    } else {
        alert('Usuário não encontrado!');        
    }
}

// Função para exibir modal com os dados do usuário
function mostrarModal(usuario) {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <h2>Dados do Usuário</h2>
        <p><strong>Nome:</strong> ${usuario.nome}</p>
        <p><strong>Data de Nascimento:</strong> ${usuario.dataNascimento}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Número de Registro:</strong> ${usuario.registro}</p>
        <button onclick="fecharModal(this)">Fechar</button>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Função para fechar modal
function fecharModal(botao) {
    let modal = botao.parentElement;
    modal.style.display = 'none';
    modal.remove();
}
