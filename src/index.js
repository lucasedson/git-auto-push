import { $ } from "zx";
import { argv } from 'node:process';

if (process.argv.length === 2) {
    console.error('Por favor, digite a mensagem do Commit!');
    process.exit(1);
  }
else{
    const message = console.log(argv[2])
    await $`git add .`
    await $`git commit -m '${message}'}`
    await $`git push`
    await $`echo Código enviado com sucesso!!`
    process.exit(1);

}