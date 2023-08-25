const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("aulinha","root","", {
    host:"localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("ta certinho")
}).catch(function(erro){
    console.log("deu merda "+erro)
})

const agendamentos = sequelize.define("agendamentos",{
   nome:{
        type: Sequelize.STRING 
   },
   endereço:{
        type: Sequelize.STRING 
   },
   bairro:{
        type: Sequelize.STRING 
   },
   cep:{
        type: Sequelize.INTEGER 
   },
   cidade:{
        type: Sequelize.STRING 
    },
   estado:{
        type: Sequelize.STRING 
    },
   observação:{
        type: Sequelize.TEXT 
   },
})

//agendamentos.sync({force: true})



app.get("/", function(req,res){
    res.send("Tela inicial")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req,res){
    agendamentos.create({
        nome:req.params.nome,
        endereço:req.params.endereco,
        bairro:req.params.bairro,
        cep:req.params.cep,
        cidade:req.params.cidade,
        estado:req.params.estado,
        observação:req.params.observacao

    })
    res.redirect("/")
})


app.listen(8081, function(){
    console.log("carregou na portinha do nelson")
})