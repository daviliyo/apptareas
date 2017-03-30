var express = require('express');
var router = express.Router();
var tasks = [
    {
        "nom":"Diseño wireframe",
        "etiquetes": [ "wireframe","app","hibrida"],
        "realització":"36"
    },
    {
        "nom":"Reunión",
        "etiquetes": ["app","hibrida"],
        "realització":"36"
    },
    {
        "nom":"Desarrollo Layout",
        "etiquetes": [ "layout","app","hibrida"],
        "realització":"36"
    },
    {
        "nom":"Reunión cliente",
        "etiquetes": [ "reunión","app","hibrida"],
        "realització":"36"
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

router.get('/tareas', function(req, res, next) {
  res.render('tasks', { title: 'Tareas' , tareas: tasks});
});

router.get('/tareas/new', function(req, res, next) {
  res.render('newTask', { title: 'Añadir tarea' });
});

router.post('/tareas/new', function(req, res, next) {
    var name = req.body.nom;
    var labels = req.body.etiquetes;
    var realitzation = req.body.realització;

    labels = labels.split(',');

    var newTask = {
        nom: name,
        etiquetes: labels,
        realització: realitzation
    };
    tasks.push(newTask);

  res.redirect('/tareas');
});

router.post('/update', function (req, res, next) {
    var id = req.body.actualitzar;
    var nom = tasks[id].nom;
    var etiquetes = tasks[id].etiquetes;
    var realització = tasks[id].realització;
    var eti = '';

    for (var i=0; i<etiquetes.length; i++){
        eti += etiquetes[i] + ',';
    }
        console.log(nom,eti,id);
    res.render('updateTask', { title: 'Actualizar tarea', nom: nom, etiquetes: eti, realització: realització, ID: id});
});

router.post('/updated', function (req, res, next) {
    var name = req.body.nom;
    var id = req.body.id;
    var labels = req.body.etiquetes;
    var realitzation = req.body.realització;

    labels = labels.split(',');

    var updateTask = {
        nom: name,
        etiquetes: labels,
        realització: realitzation
    };

    tasks[id] = updateTask;
    
    res.redirect('/tareas');
});

router.get('/usuarios', function(req, res, next) {
    res.render('users', { title: 'Usuarios' });
});

module.exports = router;