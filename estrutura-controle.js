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
       
