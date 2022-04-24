// Instance of IO for HTML
const socket = io.connect()

// Event from server
socket.on('my message', data =>{
    alert(data);
    socket.emit('notification', {user: 'Fede', age: '29'});
});