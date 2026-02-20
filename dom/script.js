function salvar(){
    let nome = document.getElementById('nome').value;
    console.log(nome);
    let idade = document.getElementById('idade').value;
    console.log(idade);
    let email = document.getElementById('email').value;
    console.log(email);

    if ( nome == '' || idade == '' || email == ''){
        alert('Preencha todos os campos para realizar seu cadastro!')
        return;
    }

    alert(`Cadastro realizado com sucesso! \n
        Nome: ${nome} \n
        Idade: ${idade} \n
        Email: ${email} \n`)
        
        // Cria um novo elemento div para o card
        const candidatos = document.getElementById('candidatos')
        const card = document.createElement('div')

        // Define o conteúdo HTML do card usando template literals
        card.innerHTML = `
         <p>Nome: ${nome}</p>
         <p>Idade: ${idade}</p>
         <p>Email: ${email}</p>
        `
        // Adiciona a classe "card" ao elemento div
        candidatos.appendChild(card)

        //Limpar dados do formulario
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('email').value = '';

}