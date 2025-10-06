function funcionario(nome, salario, dataAdmissao, cargo) {
  this.nome = nome;
  this.salario = salario;
  this.dataAdmissao = dataAdmissao;
  this.cargo = cargo;
}

document
  .getElementById("formFuncionario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome");
    let salario = parseFloat(document.getElementById("salario").value);
    let dataAdmissao = document.getElementById("dataAdmissao").value;
    let cargo = document.getElementById("cargo").value;

    console.log(new funcionario(nome, salario, dataAdmissao, cargo));

    console.log("Funcionario Cadastrado com Sucesso!");
    console.log(funcionario);

    function modal() {
      let modal = document.getElementById("resultado").value;
      modal.innerHTML = `
        <h2>Funcionário Cadastrado</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Salário:</strong> ${salario}</p>
        <p><strong>Data de Admissão:</strong> ${dataAdmissao}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
    `;
    }
  });
