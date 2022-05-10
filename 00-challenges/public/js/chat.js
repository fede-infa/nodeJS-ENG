
socket.on('messages', messages =>{
  render(messages)
})

function render(data) { 
    var html = data.map(function(elem, index){ 
      return(`
            <div>
                <b style="color:blue;">${elem.author.email}</b> 
                [<span style="color:brown;">${elem.fyh}</span>] : 
                <i style="color:green;">${elem.text}</i>
                <img width="50" src="${elem.author.avatar}" alt=" ">
            </div>
        `) 
    }).join(" "); 
    document.getElementById('messages').innerHTML = html; 
}

const userChat = document.getElementById('username')
const messageChat = document.getElementById('text')
const buttonChat = document.getElementById('send')

function addMessage(e) { 
  
  e.preventDefault()

  var message = { 
    author: {
        email: userChat.value, 
        first_name: document.getElementById('firstname').value, 
        last_name: document.getElementById('lastname').value, 
        age: document.getElementById('age').value, 
        alias: document.getElementById('alias').value,
        avatar: document.getElementById('avatar').value
    },
    text: messageChat.value
  }

  console.log('addMessage function');

  socket.emit('new-message', message); 

  messageChat.value = ''
  messageChat.focus()

  buttonChat.disabled = true

}

userChat.addEventListener('input', () => {
    let isEmail = userChat.value.length
    let isText = messageChat.value.length
    messageChat.disabled = !isEmail
    buttonChat.disabled = !isEmail || !isText
})

messageChat.addEventListener('input', () => {
    let isText = messageChat.value.length
    buttonChat.disabled = !isText
})