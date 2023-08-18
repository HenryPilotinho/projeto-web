const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Ta certinho")
})

app.get("/contato", function(req, res){
    res.send("os contatinho")
})

app.get("/produtos/:item/:qtd", function(req, res){
    res.send("item: " + req.params.item + "<br> Quantidade: " + req.params.qtd)
})

app.listen(8081, function(){
        console.log("servidor rodando na porta 8081")
})