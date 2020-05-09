const fs = require('fs');

let todoList = [];

const saveDB = () => {
    return new Promise(( resolve, reject ) => {
        const data = JSON.stringify(todoList);

        fs.writeFile('db/data.json', data, err => {
            if (err) reject(err);
            resolve( 'data.json' )
        });

    });
}

const cargarDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const crear = descripcion => {

    cargarDB();

    const toDo = {
        id: new Date().getTime(),
        descripcion,
        completada: false
    }

    todoList.push(toDo);

    saveDB();

    return toDo;
}

const getListado = () => {
    cargarDB();
    return todoList;
}

const updateTask = ( id, completado ) => {
    cargarDB();
    // console.log('todoList', todoList)
    const index = todoList.findIndex( item => id === item.id);
    // findTask.completada = completado;
    if(index >= 0){
        todoList[ index ].completada = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
    // console.log('index', index)
}

const deleteTask = id => {
    cargarDB();
    const index = todoList.findIndex( item => id === item.id);

    if(index >= 0){
        todoList.splice( index, 1 );
        saveDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    updateTask,
    deleteTask
}