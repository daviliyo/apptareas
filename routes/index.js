var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

router.get('/tareas', function(req, res, next) {
  res.render('tasks', { title: 'Tareas' });
});

router.get('/usuarios', function(req, res, next) {
    res.render('users', { title: 'Usuarios' });
});

module.exports = router;
