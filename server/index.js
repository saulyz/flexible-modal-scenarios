const express = require('express');
const reload = require('reload');
const twig = require('twig');

const app = express();
const port = 8080;

app.use(express.static(`${__dirname}/../src/dist`));
app.set('views', `${__dirname}/../src/views`);
app.set('view engine', 'html.twig');
app.engine('html.twig', twig.__express);

app.set('twig options', {
    strict_variables: false,
    namespaces: {
        'FrontendBase': `${__dirname}/../src/views/`
    }
});

require('./routes')(app);
require('./api-endpoints')(app);

reload(app);

app.listen(port, () => console.log(`Server running. Visit localhost:${port}`));
