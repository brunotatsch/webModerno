const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http');
http.createServer((req,res) => {
  res.write('boa tarde')
  res.end()
}).listen(8080)