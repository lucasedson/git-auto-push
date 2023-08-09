import { $ } from "zx";
import { argv } from 'node:process';

if (process.argv.length === 2) {
    console.error('Por favor, digite a mensagem do Commit!');
    process.exit(1);
  }
else{
    var message = argv[2]     
    console.log(message)
    await $`git add .`
    await $`git commit -m ${message}`
    await $`git push`
    await $`echo Código enviado com sucesso!!`
    process.exit(1)

}