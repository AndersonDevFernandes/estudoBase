let maquinaLigada = false;
  let tempoParadaInicio = null;
  let tempoParadaTotalMinutos = 0;
  let responsavelAtual = "";

  function iniciarMaquina() {
    maquinaLigada = true;
    responsavelAtual = document.getElementById("responsavel").value;

    if (tempoParadaInicio) {
      const agora = new Date();
      const diffMs = agora - tempoParadaInicio;
      const diffMin = Math.round(diffMs / 60000);
      tempoParadaTotalMinutos += diffMin;
      tempoParadaInicio = null;
    }

    document.getElementById("statusMaquina").innerText = "Máquina em funcionamento!";
    document.getElementById("responsavelAtivo").innerText = `Responsável atual: ${responsavelAtual}`;
  }

  function pararMaquina() {
    maquinaLigada = false;
    tempoParadaInicio = new Date();
    document.getElementById("statusMaquina").innerText = "Máquina parada!";
    document.getElementById("responsavelAtivo").innerText = "";
  }

  function salvarProducao() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseFloat(document.getElementById("quantidade").value);
    const data = document.getElementById("data").value;
    const responsavel = document.getElementById("responsavel").value;
    const meta = parseFloat(document.getElementById("meta").value);

    const perdaEstimativa = tempoParadaTotalMinutos * 50;

    const producao = {
      produto,
      quantidade,
      data,
      responsavel,
      meta,
      tempoParada: tempoParadaTotalMinutos,
      perdaEstimativa
    };

    let lista = JSON.parse(localStorage.getItem("producoes")) || [];
    lista.push(producao);
    localStorage.setItem("producoes", JSON.stringify(lista));

    document.getElementById("resultado").innerText = `Produção salva! Perda estimada: R$ ${perdaEstimativa}`;
    tempoParadaTotalMinutos = 0;

    exibirProducoes();
    atualizarFiltroResponsavel();
    gerarGraficos();
  }

  function exibirProducoes() {
    const lista = JSON.parse(localStorage.getItem("producoes")) || [];
    const tbody = document.querySelector("#tabelaProducoes tbody");
    tbody.innerHTML = "";

    lista.forEach(p => {
      const row = `<tr>
        <td>${p.produto}</td>
        <td>${p.quantidade}</td>
        <td>${p.data}</td>
        <td>${p.responsavel}</td>
        <td>${p.tempoParada} min</td>
        <td>R$ ${p.perdaEstimativa}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }

  function atualizarFiltroResponsavel() {
    const lista = JSON.parse(localStorage.getItem("producoes")) || [];
    const select = document.getElementById("filtroResponsavel");
    const nomes = [...new Set(lista.map(p => p.responsavel))];

    select.innerHTML = '<option value="">Todos</option>';
    nomes.forEach(nome => {
      const option = document.createElement("option");
      option.value = nome;
      option.textContent = nome;
      select.appendChild(option);
    });
  }

  function gerarGraficos() {
    const lista = JSON.parse(localStorage.getItem("producoes")) || [];
    const filtroResponsavel = document.getElementById("filtroResponsavel").value;
    const filtroData = document.getElementById("filtroData").value;

    const dadosPorData = {};

    lista.forEach(p => {
      if ((filtroResponsavel && p.responsavel !== filtroResponsavel) || 
          (filtroData && p.data !== filtroData)) {
        return;
      }

      if (!dadosPorData[p.data]) {
        dadosPorData[p.data] = {
          totalQuantidade: 0,
          totalParada: 0,
          totalPerda: 0,
          meta: p.meta || 0
        };
      }
      dadosPorData[p.data].totalQuantidade += p.quantidade;
      dadosPorData[p.data].totalParada += p.tempoParada;
      dadosPorData[p.data].totalPerda += p.perdaEstimativa;
    });

    const labels = Object.keys(dadosPorData);
    const producaoData = labels.map(d => dadosPorData[d].totalQuantidade);
    const metaData = labels.map(d => dadosPorData[d].meta);
    const paradaData = labels.map(d => dadosPorData[d].totalParada);
    const perdaData = labels.map(d => dadosPorData[d].totalPerda);

    // Destruir gráficos antigos se existirem
    if (window.grafico1) window.grafico1.destroy();
    if (window.grafico2) window.grafico2.destroy();
    if (window.grafico3) window.grafico3.destroy();

    window.grafico1 = new Chart(document.getElementById('graficoProducao'), {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Produção (ton)', data: producaoData, backgroundColor: '#4CAF50' },
          { label: 'Meta (ton)', data: metaData, backgroundColor: '#f39c12' }
        ]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Produção Diária vs Meta' } }
      }
    });

    window.grafico2 = new Chart(document.getElementById('graficoParadas'), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Tempo de Parada (min)',
          data: paradaData,
          borderColor: '#e74c3c',
          backgroundColor: '#e74c3c88',
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Tempo de Paradas por Dia' } }
      }
    });

    window.grafico3 = new Chart(document.getElementById('graficoPerdas'), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Perda Estimada (R$)',
          data: perdaData,
          borderColor: '#9b59b6',
          backgroundColor: '#9b59b688',
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Perdas Estimadas por Dia (R$)' } }
      }
    });
  }

  window.onload = () => {
    exibirProducoes();
    atualizarFiltroResponsavel();
    gerarGraficos();
  };