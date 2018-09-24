module.exports = (app) => {
    
    const globals = {
        myData: 'data received from backend controller', // this mocks backend data
        menu: [
            { title: 'First', url: './' },
            { title: 'Second', url: './second' },
            { title: 'Third', url: './third' },
            { title: 'Forth', url: './forth' },
            { title: 'Fifth', url: './fifth' },
        ],
        modalTemplatePartial: 'default'
    };

    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', (req, res) => {
        res.render('pages/first/first', globals);
    });

    app.get('/second', (req, res) => {
        let newGlobals = {};
        Object.assign(newGlobals, globals, { modalTemplatePartial: 'bare' })
        res.render('pages/second/second', newGlobals);
    });

    app.get('/third', (req, res) => {
        res.render('pages/third/third', globals);
    });

    app.get('/forth', (req, res) => {
        res.render('pages/forth/forth', globals);
    });

    app.get('/fifth', (req, res) => {
        res.render('pages/fifth/fifth', globals);
    });

    app.post('/post-endpoint', (req, res) => {

        let variables = req.body;
        res.send({
            status: 200,
            message: 'Response from POST endpoint. Dumping variables', variables
        });
    })
}
