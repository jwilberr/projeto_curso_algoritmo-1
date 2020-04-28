/* Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
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
   senao
      escreval ("Reprovado!")
   fimse */

   var nome, nota01, nota02, media;
   nome = prompt("Digite o nome do aluno:");
   nota01 = prompt("Digite a nota 1 do aluno:");
   nota02 = prompt("Digite a nota 2 do aluno");

   media = (parseInt(nota01)+parseInt(nota02)) / 2

   if (media >= 50){
        alert("aprovado", + nome)
   }
   else{
    alert("reprovado" + nome)
   }
       
