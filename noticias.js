var http = require('http');

http.createServer(function (req, res) {

  

    if (req.url == '/home') {
        res.end("<html><body><h1>Portal do Andre</h1><h2>Home</h2/><p>Aqui sera escrito o restante do site sobre o Andre, onde essa pagiana ira conter texto sobre a pagina HOME</p></body></html>");
    } else if (req.url == '/noticias') {
        res.end("<html><body><h1>Portal do Andre</h1><h2>Noticias</h2><p>Aqui sera escrito o restante do sobre o Andre, onde iremos abordar temas referentes a Noticias e atualiza��es</p></body></html>");
    } else {
        res.end("<html><body><h1>Portal do Andre</h1><h2>Erro 404</h2><p>Atencao, verifique o endere�o buscado, n�o encontramos a pagina buscada</p></body></html>");
    }
        

    

}).listen(3000);

