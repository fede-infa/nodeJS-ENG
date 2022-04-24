let socket = io.connect(); // 

function renderMessages(data){
    let html = data.map( (msg, index) =>{
        return(`<div>
                <strong>${msg.author}</strong>:
                <em>${msg.text}</em>`)
    }).join(' ');
    document.querySelector('#messages').innerHTML = html;
}

function addMessage(e){
    let newMessage = {
        author: document.querySelector('#author').value,
        text: document.querySelector('#text').value
    };
    socket.emit('new-message', newMessage);
    return false
}

socket.on('messages', data =>{ return renderMessages(data)});