module.exports = (app) => {
    
    const globals = {
        myData: 'data received from backend controller', // this mocks backend data
        menu: [
            { title: 'First', url: './' },
            { title: 'Second', url: './second' },
            { title: 'Third', url: './third' },
            { title: 'Forth', url: './forth' },
        ],
        modalTemplatePartial: 'default'
    };

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
}
