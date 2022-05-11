//importa conf dos aquivos
const servidor = require("./config/servidor")
//carregar o express
const app = servidor.app
//carregar porta
const porta = servidor.porta

//carregar rota index
const index = require('./routes/index')(app)


app.listen(porta)
