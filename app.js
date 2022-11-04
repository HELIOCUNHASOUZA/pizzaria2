// importar o  express
const express = require('express');
// criar o servidor
const servidor = express();
// definir uma rota no servidor -(endereço, metodo função callback)
servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição");
    res.send("segue lista de usuarios...");
});


// por o servidor para sodar (aguardando requisição)
servidor.listen(3000);