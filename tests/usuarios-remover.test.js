const UsuariosServices = require('..//services/UsuariosServices');

UsuariosServices.remover({
    "id": 2,
    "nome": "Bruno Bezerra",
    "email": "bruno@bezerra.com",
    "senha": "abcde",
    "enderecos": [
        "Rua das Camélias, 99",
        "teste"
    ],
    "formasDePagamento": [
        "1234 1234 1234 1234",
        "1234 1234 1234 1236"
    ]
},);
