const tecnologias = new Map();
tecnologias.set('React', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('React'));
console.log(tecnologias.get('React').framework);

const chaveVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numero']
])

chaveVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
console.log(chaveVariadas.delete(123))
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size);
