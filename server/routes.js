module.exports = (app) => {
    
    const globals = {
        myData: 'data received from backend controller', // this mocks backend data
        menu: [
            { id: 1, title: 'First', url: './page01' },
            { id: 2, title: 'Second', url: './page02' },
            { id: 3, title: 'Third', url: './page03' },
            { id: 4, title: 'Forth', url: './page04' },
            { id: 5, title: 'Fifth', url: './page05' },
            { id: 6, title: 'Sixth', url: './page06' }
        ],
        modalTemplatePartial: 'default',
        currentPageId: null
    };

    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    let newGlobals = {};

    app.get('/', (req, res) => {
        Object.assign(newGlobals, globals, {currentPageId: 1});
        res.render('pages/local-functions/local-functions', newGlobals);
    });

    app.get('/page01', (req, res) => {
        Object.assign(newGlobals, globals, { currentPageId: 1 });
        res.render('pages/local-functions/local-functions', newGlobals);
    });

    app.get('/page02', (req, res) => {
        Object.assign(newGlobals, globals, { modalTemplatePartial: 'bare' }, { currentPageId: 2 });
        res.render('pages/visual-templates/visual-templates', newGlobals);
    });

    app.get('/page03', (req, res) => {
        Object.assign(newGlobals, globals, { currentPageId: 3 });
        res.render('pages/event-based/event-based', newGlobals);
    });

    app.get('/page04', (req, res) => {
        Object.assign(newGlobals, globals, { currentPageId: 4 });
        res.render('pages/helper-services/helper-services', newGlobals);
    });

    app.get('/page05', (req, res) => {
        Object.assign(newGlobals, globals, { currentPageId: 5 });
        res.render('pages/ux-task/ux-task', newGlobals);
    });

    app.get('/page06', (req, res) => {
        Object.assign(newGlobals, globals, { currentPageId: 6 });
        res.render('pages/pass-value/pass-value', newGlobals);
    });    

    app.post('/post-endpoint', (req, res) => {

        let variables = req.body;
        res.send({
            status: 200,
            message: 'Response from POST endpoint. Dumping variables', variables
        });
    })
}
