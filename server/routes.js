module.exports = (app) => {
    
    const globals = {
        myData: 'data received from backend controller', // this mocks backend data
        menu: [
            { title: 'Home', url: '/' }
        ]
    };

    app.get('/', (req, res) => {
        res.render('pages/home/home', globals);
    });
}
