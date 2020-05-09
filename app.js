// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log('[argv]', argv)

const toDo = require('./to-do/to-do');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('crear nota')
        const tarea = toDo.crear( argv.description );
        console.log('tarea:', tarea)
        break;
    case 'listar':
        // console.log('listar tareas');
        let listado = toDo.getListado();
        for( let tarea of listado ){
            console.log( '========= Por hacer ======'.green );
            console.log( "ID: ", tarea.id );
            console.log( "Descripción: ", tarea.descripcion );
            console.log( 'Estado: ', tarea.completada );
            console.log( '=========================='.green );
        }
        break;
    case 'actualizar':
        let updateTask = toDo.updateTask( argv.id, argv.complete );
        // console.log('actualizar tareas', updateTask)
        if(updateTask){
            console.log( '========= TAREA COMPLETADA ======'.green );
        }
        break;
    case 'eliminar':
        let deleteTask = toDo.deleteTask( argv.id );
        // console.log('actualizar tareas', updateTask)
        if(deleteTask){
            console.log( '========= TAREA ELIMINADA ======'.red );
        }
        break;
    default:
        console.log('Comando no reconocido')
        break;
}