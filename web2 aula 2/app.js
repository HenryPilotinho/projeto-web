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
