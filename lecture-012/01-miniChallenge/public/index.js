// Instance of IO for HTML
const socket = io.connect()

console.log('Starting...');

// Event from server
const inputUser = document.querySelector('#inputSocket');
inputUser.addEventListener('input', () =>{
    socket.emit('inputMessage', inputUser.value);
});

socket.on('newContent', data =>{
    document.querySelector('#socketText').innerHTML = data;
});