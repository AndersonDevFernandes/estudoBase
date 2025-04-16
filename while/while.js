let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? Se sim, digite o nome da cidade. Se não, digite fim")

while (continuar === "Sim") {
  let cidade = prompt("Digite o nome da cidade")    
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Deseja continuar? Se sim, digite Sim. Se não, digite Fim")
}

alert(`As cidades que você já visitou são: ${cidades}`)