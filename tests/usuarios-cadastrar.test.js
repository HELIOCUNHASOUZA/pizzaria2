const UsuariosServices = require('..//services/UsuariosServices');

UsuariosServices.cadastrar({
    nome: "Nome do Usuário",
    email: "email@dousuario.com",
    senha: "senha_do_usuario_sem_criptografar",
    endereco: "Rua dos usuários, nº 256. Usuariolândia-BA"
});
