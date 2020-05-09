const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: "Descripción de la tarea por hacer"
                    }
                })
                .command('actualizar', 'Actualizar el estado completado de una tarea', {
                    id: {
                        demand: true,
                        alias: 'i',
                        desc: "ID de la tarea a actualizar"
                    },
                    complete: {
                        defaul: true,
                        alias: 'c',
                        desc: 'Marca como completado o pendiente la tarea'
                    }
                })
                .command('eliminar', 'Elimina una tarea', {
                    id: {
                        demand: true,
                        alias: 'i',
                        desc: "ID de la tarea a eliminar"
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}