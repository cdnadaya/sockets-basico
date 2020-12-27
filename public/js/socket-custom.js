var socket = io();
//escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');;
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});