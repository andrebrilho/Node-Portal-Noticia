function Noticias(connection) {
    this._connection = connection;
}

Noticias.prototype.getNoticias = function (connection, callback) {
    connection.query('select * from noticias order by data_criacao desc', callback);
}

Noticias.prototype.getNoticia = function (id_noticia, callback) {
    //console.log(id_noticia.id_noticia);
    this._connection.query('select * from noticias where id_noticia =  ' + id_noticia.id_noticia, callback);
}

Noticias.prototype.salvarNoticia = function (noticia, connection, callback) {
    console.log(noticia);
    var teste = connection.query('insert into noticias set ?', noticia, callback);
    console.log(teste);

}

Noticias.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {
    return Noticias;
}