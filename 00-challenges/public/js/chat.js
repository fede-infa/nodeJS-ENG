/* --------------------- Message denormalization ---------------------------- */
// Author schema normalizr
/* const schemaAuthor = new normalizr.schema.Entity('author',{},{idAttribute: 'email'});

// Message schema normalizr
const schemaMenssage = new normalizr.schema.Entity('post', {
    author: schemaAuthor
},{idAttribute: '_id'})

// Post schema normalizr
const schemaPost = new normalizr.schema.Entity('posts', {
  messages: [schemaMenssage]
},{idAttribute: 'id'}) */
/* ----------------------------------------------------------------------------- */

/* ----------------------------------------------------------------- */
/* socket.on('messages', function(messageNormalized) { 

  let messageNormalizedSize = JSON.stringify(messageNormalized).length
  console.log(messageNormalized, messageNormalizedSize);

  let messageDenormalized = normalizr.denormalize(messageNormalized.result, schemaPost,messageNormalized.entities)
  console.log(messageDenormalized);

  let messageDenormalizedSize = JSON.stringify(messageDenormalized).length
  console.log(messageDenormalized, messageDenormalizedSize);

  let percentCompressed = parseInt((messageNormalizedSize * 100) / messageDenormalizedSize)
  console.log(`Compression percent: ${percentCompressed}%`)
  document.getElementById('compresion-info').innerText = percentCompressed

  render(messageDenormalized.messages);
}); */

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