function validar() {
  // Pegando os valores dentro da função, após o usuário preenchê-los
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const telefone = document.getElementById('telefone').value; // Corrigi "number" para "telefone"

  if (nome === '' || email === '' || senha === '' || telefone === '') {
    alert('Preencha todos os campos');
    return; // Para a execução aqui se os campos não estiverem preenchidos
  }

  // Criando o objeto do usuário
  let usuario = {
    nome: nome,
    email: email,
    senha: senha,
    telefone: telefone,
  };

  // Salvando no localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  // Exibindo o alerta de sucesso antes do redirecionamento
  alert('Cadastro realizado com sucesso!');

  // Redirecionando para a página de login
  window.location.href = 'login.html';
}

// Função para carregar os dados no login
function logar() {

    //pegandos os valores dentro da função, após o usuário preenchê-los
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

    // Obtendo os dados do localStorage
    let dados = localStorage.getItem('usuario');


    if (dados){
      let usuario = JSON.parse(dados);

      //Comparando os dados digitados com os dados do localStorage
      if (emailDigitado === usuario.email && senhaDigitada === usuario.senha){
        alert('Login realizado com sucesso!');
        window.location.href = 'index2.html';
      } else {
        alert('Email ou senha incorretos');
      }
    } else {
      alert('Usuário não encontrado, faça o cadastro primeiro');
    }
}

