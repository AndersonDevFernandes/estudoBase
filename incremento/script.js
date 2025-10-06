const selectErro = document.getElementById("erroMaquina");
  const relatorio = document.getElementById("relatorio");

  selectErro.addEventListener("change", () => {
    const valor = selectErro.value;
    const texto = selectErro.options[selectErro.selectedIndex].text;

    if (!valor) return; // ignora se for a opção padrão

    // cria item de lista
    const li = document.createElement("li");
    li.textContent = texto + " ";

    // cria botão excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.style.marginLeft = "10px";
    btnExcluir.onclick = () => li.remove();

    li.appendChild(btnExcluir);
    relatorio.appendChild(li);

    // reseta select para voltar na opção padrão
    selectErro.value = "";
  });