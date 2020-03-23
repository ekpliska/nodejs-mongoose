const { Router } = require('express');
const TodoModel = require('../models/Todo');

const router = Router();

router.get('/', async (req, res) => {

    const todos = await TodoModel.find({});

    res.render('index', {
        title: 'Todos app',
        isIndex: true,
        todos: todos
    });

});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    });
});

module.exports = router;