/* Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval("Digite um nome: ")
     leia(nome)
     escreval("Digite um número: ")
     leia(numero)
     
     escreval(nome, ":" , numero)

Fimalgoritmo */

var nome, numero
nome = prompt("Digite seu nome: ")
numero = prompt("Digite seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero
