const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta Aplicación'
    });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        //if (mensaje.usuario) {
        //    callback({
        //        resp: 'TODO SALIO BIEN!'
        //    });
        //} else {
        //    callback({
        //        resp: 'TODO SALIO MALLL!!!!'
        //    });
        //}

    });
});