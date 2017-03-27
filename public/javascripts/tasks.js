var tareas = [
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

for (var i = 0; i < tareas.length; i++) {

    var index = document.getElementById('index');
    index.innerHTML += '<div class="col-md-4">' +
                            '<div class="panel panel-default">'+
                                '<div class="panel-heading">'+
                                     tareas[i].nom +
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="progress">'+
                                        '<div class="progress-bar" role="progressbar" aria-valuenow="'+ tareas[i].realització +'" aria-valuemin="0" aria-valuemax="100" style="width:'+ tareas[i].realització +'%">'+
                                            '<span class="sr-only">'+ tareas[i].realització +'% Complete</span>'+ tareas[i].realització +'%'+
                                        '</div>'+
                                    '</div>'+
                                    '<button class="btn btn-default" type="submit">Update</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>' ;

}