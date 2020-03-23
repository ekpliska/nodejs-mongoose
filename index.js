const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');

const appRouters = require('./routes');

const PORT = 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'style')));
app.use(appRouters);

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log('Server has been started');
        });

    } catch (error) {
        console.log(error);
    }
}

start();