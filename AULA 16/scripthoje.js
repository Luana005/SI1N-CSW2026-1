document.writeln("OLÁ MUNDO")
window.alert("Olá mundo, seu lindo!!! ")
document.getElementById('titulo').innerHTML = "Olá mundo Javascript "
window.prompt("Olá aluno de Javascript, qual o seu nome?")


document.getElementById('nomeAluno').innerHTML = ("O nome do aluno javascript é : + nomePrompt")


let resposta = window.confirm("Você gosta de Javascript?")

if (resposta) {
    document.getElementById('nomeAluno').innerHTML = "O aluno gosta de Javascript";
}
else{
    document.getElementById('nomeAluno').innerHTML = ('O aluno NÃO gosta de Javascript')
}

function exibeNomeAluno() {
    let inputAluno = document.getElementById('inputNomeAluno').value;

    document.getElementById("resposta").innerHTML = "O nome do aluno digitado foi:" + inputAluno;

    document.getElementById("resposta").style.backgroundImage = "linear-gradient (to right, red, yellow)";
}