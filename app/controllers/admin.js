module.exports.formulario_inclusao_noticia = function (app, req, res) {
	res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app, req, res) {
	var noticia = req.body;

	console.log(noticia);

	req.assert('titulo', 'Titulo � obrig�torio').notEmpty();
	req.assert('resumo', 'Resumo � obrig�torio').notEmpty();
	req.assert('resumo', 'Resumo precisa ter no minimo 10 e no m�ximo 100 caracteres').len(10, 100);
	req.assert('autor', 'Autor � obrig�torio').notEmpty();
	req.assert('noticia', 'Titulo � obrig�torio').notEmpty();
	req.assert('data_noticia', 'A Data � obrigat�ria').notEmpty();
	req.assert('data_noticia', '� necess�rio ser uma data este campo').isDate;


	var erros = req.validationErrors();

	if (erros) {

		res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasModel;

	noticiasModel.salvarNoticia(noticia, connection, function (erros, result) {
		console.log(noticia);
		console.log(erros);
		console.log(result)
		res.redirect('/noticias');

	});
}