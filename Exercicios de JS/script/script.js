function exercicio1() {
    let s1 = Number(document.getElementById("s1").value)
    let a2 = Number(document.getElementById("a2").value)
    ex1 = (s1 * (a2 / 100 + 1))
    document.getElementById("r1").innerHTML = (` Seu novo salário é: R$${ex1}`)
}

function exercicio2() {
    let h1 = Number(document.getElementById("h1").value)
    let b1 = Number(document.getElementById("b1").value)
    ex2 = ((b1 * h1) / 2)
    document.getElementById("r2").value = (`Área = ${ex2}`)
}

function exercicio3() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    ex3 = ((n1 * 1.3) + (n2 * 1.7)) / (1.3 + 1.7)
    document.getElementById("r3").innerHTML = (`Média: ${ex3}`)
}

function exercicio4() {
    window.alert("Inspecione a página, vá até o console e em seguida clique em mensagens para ver o resultado!")

    let anoNascimento = Number(document.getElementById("anoNascimento").value)

    var idade = (2023 - anoNascimento)
    var idadeMes = (idade * 12)
    var idadeDias = (idade * 365)
    var idadeHoras = (idadeDias * 24)
    var idadeMinutos = (idadeHoras * 60)
    var idadeSemanas = (idadeDias / 7)

    console.log(`você tem aproximadamente ${idade} anos, ${idadeMes} meses, ${idadeDias} dias, ${idadeHoras} horas, ${idadeMinutos} minutos e ${idadeSemanas} semanas.`)

    idade2050 = (2050 - anoNascimento)
    console.log(`em 2050 você terá ${idade2050} anos!`)

}

function exercicio5() {
    let distancia = Number(document.getElementById("distancia").value)
    let volume = Number(document.getElementById("volume").value)
    ex5 = (distancia / volume)

    document.getElementById("r5").innerHTML = (`Consumo Médio: ${ex5}`)
}

function exercicio6() {
    let horaT = Number(document.getElementById("horaTrabalhada").value);
    let salarioHora = 10;
    let sBruto = salarioHora * horaT;
    
    if (horaT > 40 ){
        let horaExtra = ((horaT - 40) * (salarioHora * 3 - salarioHora)) ;
        sBruto = sBruto + horaExtra;
    }

    let precoRefeicao = 1.5;
    let quantidadeRefeicao = Number(document.getElementById("qtdRefeicao").value)
    let gastoRefeicao = (precoRefeicao * quantidadeRefeicao)

    let sLiquido = sBruto - gastoRefeicao


    
    document.getElementById("salarioBruto").innerHTML = (`Salário Bruto: R$${sBruto}`)
    document.getElementById("refeicao").innerHTML = (` Gasto de Refeição: R$${gastoRefeicao}`)
    document.getElementById("salarioLiquido").innerHTML = (`Salário Líquido: R$${sLiquido}`)
    
}

function exercicio7() {
    numeroAleatorio = Math.floor((Math.random() * 100) + 0)
    if (numeroAleatorio % 2 == 0) {
        window.alert(`Opa, seu número da sorte é: ${numeroAleatorio}!\n É um número par!`)}
    else {
        window.alert(`Opa, seu número da sorte é: ${numeroAleatorio}!\n É um número impar!`)    
        }

}
