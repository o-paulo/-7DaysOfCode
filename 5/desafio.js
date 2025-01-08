const doces = []
const laticinios = []
const congelados = []
const frutas = []

const categoriaSelecionada = prompt('Qual categoria voce deseja adicionar um produto?\n1 - Doces\n2 - Laticinios\n3 - Congelados\n4 - Frutas')

if(categoriaSelecionada == 1){
    function adicionarDoces(){
        const produtoEscolhido = prompt(`Qual doce voce deseja adicionar?`)
        doces.push(produtoEscolhido)

        const desejaAdicionarMaisDoces = prompt("Deseja adicionar mais doces?\n1 - Sim\n2 - Nao")
        if(desejaAdicionarMaisDoces == 1){
            adicionarDoces()
        } else {
            alert(doces)
        }
    }
    adicionarDoces()
}

if(categoriaSelecionada == 2){
    function adicionarLaticinios(){
        const produtoEscolhido = prompt(`Qual laticinio voce deseja adicionar?`)
        laticinios.push(produtoEscolhido)

        const desejaAdicionarMaisLaticinios = prompt("Deseja adicionar mais laticinios?\n1 - Sim\n2 - Nao")
        if(desejaAdicionarMaisLaticinios == 1){
            adicionarLaticinios()
        } else {
            alert(laticinios)
        }
    }
    adicionarLaticinios()
}

if(categoriaSelecionada == 3){
    function adicionarCongelados(){
        const produtoEscolhido = prompt(`Qual congelado voce deseja adicionar?`)
        congelados.push(produtoEscolhido)

        const desejaAdicionarMaisCongelados = prompt("Deseja adicionar mais congelados?\n1 - Sim\n2 - Nao")
        if(desejaAdicionarMaisCongelados == 1){
            adicionarCongelados()
        } else {
            alert(congelados)
        }
    }
    adicionarCongelados()
}

if(categoriaSelecionada == 4){
    function adicionarFrutas(){
        const produtoEscolhido = prompt(`Qual fruta voce deseja adicionar?`)
        frutas.push(produtoEscolhido)

        const desejaAdicionarMaisFrutas = prompt("Deseja adicionar mais frutas?\n1 - Sim\n2 - Nao")
        if(desejaAdicionarMaisFrutas == 1){
            adicionarFrutas()
        } else {
            alert(frutas)
        }
    }
    adicionarFrutas()
}