let response = require('./mocks/random-success');
let list = require('./mocks/list');

module.exports = function(app) {

    let root = '/api';

    app.get(root + '/luck', (req, res) => {
        res.send(response());
    });

    app.get(root + '/list', (req, res) => {
        res.send({
            status: 200,
            data: list
        });
    });
    
};
