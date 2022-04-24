// Instance of IO for HTML
const socket = io.connect()

console.log('Starting...');

// Event from server
const inputUser = document.querySelector('#inputSocket');
inputUser.addEventListener('keyup', e =>{
    if( e.key === 'Enter' || e.keyCode === 13){
        socket.emit('inputMessage', inputUser.value);
    }
});

socket.on('newContent', messages =>{
    console.log(messages);
    document.querySelector('#socketText').innerHTML = messages.map( msg =>{return `id: ${msg.socketId} message: ${msg.message}`}).join('<br>');
});