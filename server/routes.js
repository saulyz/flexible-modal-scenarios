module.exports = (app) => {
    
    const globals = {
        myData: 'first data passed', // this mocks backend data
    };

    app.get('/', (req, res) => {
        res.render('pages/home', globals);
    });
}
