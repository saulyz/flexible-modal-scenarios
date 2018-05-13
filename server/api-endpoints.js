let response = require('./mocks/random-success');

module.exports = function(app) {

    let root = '/api';

    app.get(root + '/luck', (req, res) => {
        res.send(response());
    });
    
};
