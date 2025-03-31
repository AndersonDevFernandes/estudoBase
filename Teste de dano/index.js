const nick = prompt("Digite o nome do seu personagem: ");
const classe = parseInt(prompt("Escolha uma das seguintes classes: \n"
    + "1 - Guerreiro \n"
    + "2 - Mago \n"
    + "3 - Arqueiro \n"
));

const upgrade = parseFloat(prompt("De 0 a 15, quantas vezes sua arma foi encantada?"));

let dano = 0;
let hp = 0;
let hpBoss = 20000;

// Definindo dano e vida com base na classe escolhida
if (classe === 1) {
    dano = 100;
    hp = 2000;
} else if (classe === 2) {
    dano = 150;
    hp = 1500;
} else if (classe === 3) {
    dano = 200;
    hp = 1000;
} else {
    alert("Opção inválida!");
}

// Aplicando o upgrade corretamente ao dano
dano += dano * (upgrade * 0.1); // Cada upgrade aumenta o dano em 10%

// Calculando quantos turnos são necessários para derrotar o boss
let hits = Math.ceil(hpBoss / dano);

alert(`${nick}, você escolheu a classe ${classe} \n
Seu dano é de ${dano.toFixed(2)} \n
Sua vida é de ${hp} \n
Seu upgrade é de ${upgrade} vezes \n
Com esse dano, você derrotará o boss em ${hits} hits.
`);



// let nome = prompt("Digite seu nome: "); 
// nome === "" ? alert("Campo vazio, digite seu nome") :
// alert("Seja bem vindo " + nome)


// if (nome ==""){
//     alert("Campo vazio, digite seu nome")
//     nome = prompt("Digite seu nome: ")
// } else {
//     alert("Seja bem vindo " + nome)
// }