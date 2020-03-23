const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Todos app',
        isIndex: true
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    });
});

module.exports = router;