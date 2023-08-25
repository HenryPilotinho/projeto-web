const express = require ("express")
const app = express()


const Sequelize = require ("sequelize")
const sequlize = new Sequelize("aulinha","root","", {
    host:"localhost",
    dialect: "mysql"
})

sequlize.authenticate().then(function(){
    console.log("ta certinho")
}).catch(function(erro){
    console.log("deu merda "+erro)
})
