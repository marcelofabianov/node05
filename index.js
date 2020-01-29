const express = require('express');
const hbs = require('handlebars');

const app = express();

app.engine(
    'handlebars',
    hbs({
        defaultLayout: 'main'
    })
);

app.listen(3002, () => console.log('Nodemon'));
