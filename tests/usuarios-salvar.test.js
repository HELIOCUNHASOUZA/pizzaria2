const UsuariosServices = require('../services/UsuariosServices');

UsuariosServices.salvar([{"id": 2,
"nome": "HELIO CUNHA",
"email": "HELIO@CUNHA.com",
"senha": "abcde",
"enderecos": [
    "Rua das Camélias, 99",
    "teste"
],
"formasDePagamento": [
    "1234 1234 1234 1234",
    "1234 1234 1234 1236"
]
}])