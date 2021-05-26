const porta = 3003

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancodeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) =>
{
  res.send(bancoDeDados.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) =>
{
  res.send(bancoDeDados.getProduto(req.params.id)) // Converter para JSON
})

app.post('/produtos', (req, res, next) =>
{
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.put('/produtos/:id', (req, res, next) =>
{
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) =>
{
  const produto = bancoDeDados.deleteProdutos(req.params.id)
  res.send(produto)
})

app.listen(porta, () =>
{
  console.log(`Server exec on port ${porta}.`)
})
