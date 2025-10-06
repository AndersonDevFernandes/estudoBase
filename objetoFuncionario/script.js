const readline = require('readline')

const funcionarios = {
    b001:{
        nome: "João",
        cargo: "Gerente",
        salario: 5000
    },
    b002:{
        nome: "Maria",
        cargo: "Vendedora",
        salario: 3000
    },
    b003:{
        nome: "José",
        cargo: "Estoquista",
        salario: 2000
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(
    'Digite o código: ', (codigo) =>{
        if (funcionarios[codigo]){
           const f = funcionarios[codigo]
           console.log(`\n Informações do funcionario ${codigo}`)
           console.log(`nome: ${f.nome}`)
           console.log(`Cargo: ${f.cargo}`)
           console.log(`Salario: R$ ${f.salario.toFixed(2)}`)

        } else{
            console.log('Funcionario não encontrado!')
        }
        rl.close()
    }
)

