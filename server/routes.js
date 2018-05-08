module.exports = (app) => {
    
    const globals = {
        myData: 'first data passed', // this mocks backend data
        menu: [
            { title: 'Home', url: '/' }
        ]
    };

    app.get('/', (req, res) => {
        res.render('pages/home/home', globals);
    });
}
