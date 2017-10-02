var mysql = require('mysql');

var connMySQL = function () {

    console.log('Conexao com banco de dados estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_de_noticias'
    });
}

module.exports = function () {
console.log('AutoLoad carregou o modulo de conexão');
    return connMySQL;    
}