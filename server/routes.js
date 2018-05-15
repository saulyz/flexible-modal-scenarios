module.exports = (app) => {
    
    const globals = {
        myData: 'data received from backend controller', // this mocks backend data
        menu: [
            { title: 'First', url: './' },
            { title: 'Second', url: './second' }
        ]
    };

    app.get('/', (req, res) => {
        res.render('pages/first/first', globals);
    });

    app.get('/second', (req, res) => {
        res.render('pages/second/second', globals);
    });
}
