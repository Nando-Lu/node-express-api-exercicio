const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}


const produtos = {}

function adicionarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}

function getProduto(id) {
    return produtos[id] || {}
}

function removerProduto(id) {
    let produtoRemovido = produtos[id]
    delete produtos[id]
    return produtoRemovido
}

module.exports = {
    adicionarProduto,
    getProduto,
    getProdutos,
    removerProduto
}
















