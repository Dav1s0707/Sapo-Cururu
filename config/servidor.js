const express = require('express')
//importa o express

//executa o express
const app = express()

//definir porta do servidor
const porta = process.env.PORT || 3

//criar rota do tipo send

// app.get('/',(req, res)=>{
//     res.send("<marquee Cuidado com a Cuca que a Cuca te pega E pega daqui e pega de lá <br> Cuidado com a Cuca que a Cuca te pega E pega daqui e pega de lá")
// })
//app.listen(porta)
// 11/05

module.exports = {app,porta}
