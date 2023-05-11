function mostrarEx(idExercicio) {
    let exercicios = document.getElementsByClassName("exercicio");
    for (i = 0; i < exercicios.length; i++) {
        exercicios[i].style.display = "none"
    }
    let exSelecionado = document.getElementById(idExercicio);
    if (exSelecionado) {
        exSelecionado.style.display = "block"
    }
}


function exercicio1() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    ex1 = (n1 + n2) / 2
    document.getElementById("r1").innerHTML = (`A média entre ${n1} e ${n2} é: ${ex1}`)
}

function exercicio2() {
    window.alert("Vamos calcular potência!")
    input1 = window.prompt("Dê um valor para base: ")
    input2 = window.prompt("Dê um valor para expoente: ")
    window.alert("Inspecione a página, vá até o console e em seguida clique em mensagens para ver o resultado!")
    ex2 = Math.pow(input1, input2)
    console.log(`Exercício 2`)
    console.log(`O resultado de ${input1} elevado a ${input2} é igual a ${ex2}`)

}

function exercicio3() {
    const conjunto = document.getElementById("inputArray");
    const valores = conjunto.value.split(",").map(Number); /*.map(number) é usado para converter os valores do input em números*/
    menorValor = Math.min(...valores); /* os três pontos (...)  é usado para desestruturar o array, o que significa que ele extrai os elementos individuais do array e os passa como argumentos separados para uma function */
    document.getElementById("r3").innerHTML = (`o menor valor é ${menorValor}`)
}

function exercicio4() {
    window.alert("Inspecione a página, vá até o console e em seguida clique em mensagens para ver o resultado!")
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
    };

    let { modelo, config: { processador } } = dados
    console.log(`Exercício 4`)
    console.log(`Modelo = ${modelo}`)
    console.log(`Processador = ${processador}`)

}

function exercicio5() {
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
    };
    let { marca, config: { processador } } = dados
    arrayRam = ["4GB", "8GB", "16GB"]
    document.getElementById("r5").innerHTML = (`Marca = ${marca}. Processador = ${processador}. Segundo Conteúdo Array = ${arrayRam[2]}`)
}

function exibir() {
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
    };
    let { marca, config: { processador } } = dados

    window.alert(`O Equipamento é um ${processador} da marca ${marca}`)
}

function exercicio7() {
    window.alert("Inspecione a página, vá até o console e em seguida clique em mensagens para ver o resultado!")
    let novoEquip = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
        valorVenda: 10000,
        qtdEstoque: 20
    };
    console.log(novoEquip)
}

function exercicio8() {
    window.alert("Inspecione a página, vá até o console e em seguida clique em mensagens para ver o resultado!")

    /* Letra (A) */
    let arrayX = [15, 25,];
    let arrayY = [12, 15, 23, 43];
    console.log(`Letra (A): arrayX: ${arrayX}, arrayY: ${arrayY}`);

    /* Letra (B) */
    let novaArrayY = arrayY.join("-");
    console.log(`Letra (B): ${novaArrayY}`);

    /* Letra (C) */
    var arrayZ = arrayX.concat(arrayY);
    console.log(`Letra (C): arrayZ: ${arrayZ}`);

    /* Letra (D) */
    var multiplicacao = []
    for (let i = 0; i < arrayZ.length; i++) {
        multiplicacao.push(arrayZ[i] * 5);
    }

    console.log(`Letra (D): ${multiplicacao}`)
}
