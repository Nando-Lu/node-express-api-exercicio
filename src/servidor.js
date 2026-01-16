// cliente (requisição) <------------> Servidor (resposta)
const porta = 3003
const bancoDeDados = require('./bancoDeDados')
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.adicionarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.adicionarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produtoRemovido = bancoDeDados.removerProduto(req.params.id)
    res.send(produtoRemovido)
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})









