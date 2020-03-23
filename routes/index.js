const { Router } = require('express');
const TodoModel = require('../models/Todo');

const router = Router();

router.get('/', async (req, res) => {

    const todos = await TodoModel.find({}).lean();

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

router.post('/create', async (req, res) => {
    const dataPost = {
        title: req.body.title
    };

    const todo = new TodoModel(dataPost);
    await todo.save();

    res.redirect('/');
});

module.exports = router;