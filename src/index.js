import { $ } from "zx"; // Importa a bibilioteca zx
// $.verbose = false



if (process.argv.length === 2) { //Verifica se o usuário digitou alguma mensagem
    console.error('Por favor, digite a mensagem do Commit!'); //Exibe mensagem de erro
    process.exit(1); //Finaliza a execução
  }
else{
    var message = process.argv[2] //Captura a mensagem 
    // console.log(message) //Exibe a mensagem
    await $`git add .` //Adiciona o arquivo no Git
    await $`git commit -m ${message}` //Comita o arquivo referenciando a mensagem
    await $`git push` //Envia o arquivo para o Git
    console.log("Add, Commit e Push realizado com sucesso!") 
    process.exit(1)

}