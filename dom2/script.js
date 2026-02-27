// 1. Carrega o JSON
fetch('wrc_cars.json')
    .then(response => response.json())
    .then(data => {
        // Guarda os dados numa variável global
        window.carros = data.cars;
    });

// 2. Função chamada pelo botão
function selecionar() {
    const select = document.getElementById('select');
    const idSelecionado = select.value;

    // Se não selecionou nada, avisa
    if (!idSelecionado) {
        alert('Selecione um carro!');
        return;
    }

    // 3. Encontra o carro no array pelo id
    const carro = window.carros.find(c => c.id === idSelecionado);

    // 4. Monta o conteúdo do modal
    const conteudo = `
        <img src="${carro.imagem}" alt="${carro.name}" style="width:100%; border-radius:6px;">
        <h2>${carro.name}</h2>
        <p><strong>Tração:</strong> ${carro.tracao}</p>
        <p><strong>Marchas:</strong> ${carro.marchas}</p>
        <p><strong>Peso:</strong> ${carro.peso_kg} kg</p>
        <p><strong>Giro do volante:</strong> ${carro.graus_volante}°</p>
        <p><strong>Torque:</strong> ${carro.torque_nm} Nm</p>
        <p><strong>Velocidade máxima:</strong> ${carro.velocidade_maxima_kmh} km/h</p>
        <p><strong>Títulos de fabricantes:</strong> ${carro.titulos_fabricantes.length > 0 ? carro.titulos_fabricantes.join(', ') : 'Nenhum'}</p>
        <p><strong>Títulos de pilotos:</strong> ${carro.titulos_pilotos.length > 0 ? carro.titulos_pilotos.join(', ') : 'Nenhum'}</p>
    `;

    // 5. Injeta no modal e abre
    document.getElementById('modal-conteudo').innerHTML = conteudo;
    document.getElementById('modal').style.display = 'block';
}

// 6. Fecha o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// 7. Fecha o modal clicando fora
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) fecharModal();
});