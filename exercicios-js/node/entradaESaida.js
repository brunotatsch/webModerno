const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if (anonimo)
{
  process.stdout.write('Bem vindo anomino\n')
  process.exit();
} else
{
  process.stdout.write('Informe seu nome : ')
  process.stdin.on('data', data =>
  {
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Bem vindo ${nome} \n`)
    process.exit();
  })
}