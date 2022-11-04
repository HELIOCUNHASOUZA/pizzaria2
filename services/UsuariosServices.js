const usuarios = require('../databases/usuarios.json');
function listar(){
    // Seu código aqui
    console.table(usuarios.map(
        u => {
            return {
                id: u.id,
                nome: u.nome,
                email: u.email,
            }
        }
    )); 
}

function salvar(arrayDeUsuarios){
    // Seu código aqui
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}

function cadastrar(objeto){
// Seu código aqui
    usuarios.push(objeto)
    salvar(usuarios);   
}

function detalhar(idUsuario){
// Seu código aqui
console.table(usuarios.map(
    u => {
        return {
            nome: u.nome,
            email: u.email,
            enderecos: u.enderecos
        }
    }
))
}


function remover(idDoUsuarioParaRemover){
    // Seu código aqui
    usuarios.splice(index => index.id === idDoUsuarioParaRemover);
    usuarios.splice(usuarios, 2)    
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
    var alterar = novosDados.replace(usuario => idUsuario === usuario.id)
    novosDados.replace(novosDados, 1)
    console.log(novosDados)

}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
    var usuario = usuarios.find(function(usuarios){
        return idUsuario === usuarios.id
    })
    if(usuario != -1){
        adcionandoEndereco = usuario.enderecos.push(novoEndereco)
    } else{
        console.log("novoEndereco")
    }
    salvar(usuarios);
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
    const usuarioId = usuarios.findIndex(usuario=> usuario.id == idUsuario)
    let removerdoEndereco = usuarios[usuarioid].enderecos.splice(posicaoendereco, 1)
    salvar(usuarios)
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui  
    const usuarioId = usuarios.findIndex(usuario => idUsuario == idUsuario);{
    usuarios[usuarioId].enderecos[posicaoDoEndereco]=novoEndereco
    salvar(usuarios)
    }  
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
    const usuarioId = usuarios.findIndex(usuario => idUsuario === usuario.id)
    usuarios[usuarioId].FormaDePagamento.push(novaFormaDePagamento)
    salvar(usuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
    const usuarioId = usuarios.findIndex(usuario => idUsuario === usuario.id)
    usuarios.findIndex(index => index.id === removerFormaDePagamento);
    usuarios.findIndex(removerFormaDePagamento, 1)
    salvar(usuarios)
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
    const usuarioId = usuarios.findIndex(usuario => idUsuario === usuario.id)
    var usuario = novaFormaDePagamento.replace(novaFormaDePagamento => idUsuario === usuario.id)
    novosDados.replace(novaFormaDePagamento, 1)
    console.log(novaFormaDePagamento)
}

const UsuariosServices = {
    cadastrar,
    listar,
    salvar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;