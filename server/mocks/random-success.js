module.exports = function () {

    let response = [
        {
            status: 406,
            title: 'Transaction failure',
            message: 'Failure message details from API'
        },
        {
            status: 200,
            title: 'Transaction successful',
            message: 'Success message details from API'
        },
    ];

    return response[Math.round(Math.random())];
};
