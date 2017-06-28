module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDao(connection);

        produtosDao.lista(function (err, result) {
            res.render('produtos/lista', { lista: result });
        });
        connection.end();
        console.log('listando....');
    });

    app.get('/produtos/json', function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDao(connection);

        produtosDao.lista(function (err, result) {
            res.json(result);
        });
        connection.end();
        console.log('listando....');
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form')

    });

    app.post('/produtos', function (req, res) {

        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDao(connection);
        produtosDao.salva(produto, function (erros, resultados) {
            res.redirect('/produtos');
        });


    });

}