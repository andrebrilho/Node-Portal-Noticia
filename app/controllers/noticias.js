module.exports.noticias = function (app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function (erros, result) {
        res.render("noticias/noticias", { noticias: result });

    });

}

module.exports.noticia = function (app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    var id_noticia = req.query;

    //console.log(idNoticia);

    noticiasModel.getNoticia(id_noticia, function (erros, result) {
        //console.log(idNoticia);
        console.log(erros)
         res.render("noticias/noticia", { noticia: result });
   });
}