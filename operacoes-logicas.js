/*Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 1 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 2 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02)/2
   escreval(" A média do aluno - " , nome , " é: " , media)

   se media >= 50 entao
      escreval ("Aprovado!")
   se (passou) && (media >=50 || media <=70) entao
      escreval("Aprovado!", nome)
   senao
      escreval ("Reprovado!", nome)
   fimse
Fimalgoritmo*/

var nome, nota01, nota02, passou;
passou = false;

nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a nota 01 do aluno: ")
nota02 = prompt("Digite a nota 02 do aluno: ")

media = (parseInt(nota01)+ parseInt(nota02)) )2;

if(media >=50)
   passou = true;

if(passou && media >= 70)
    alert("aprovado" + nome)
else
    alert("reprovado" + nome)

