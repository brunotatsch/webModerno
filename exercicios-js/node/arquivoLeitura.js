const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// sincrono 
const conteudo = fs.readFileSync(caminho,'utf-8');
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  const name = config.members[1].name;

  console.log(name)
} )

const config = require('./arquivo.json')
console.log(config.homeTown)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta')
  console.log(arquivos)
})