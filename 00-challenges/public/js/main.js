let socket = io.connect(); 

socket.on('products', function(productos) { 
    document.getElementById('data').innerHTML = data2TableJS(productos)
});

const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const data = {title: form[0].value, price: form[1].value, thumbnail: form[2].value}

    fetch('/api/product', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then( products => {
        form.reset()
        socket.emit('update', 'ok');
    })
    .catch(error => console.error(error))
})


function data2TableJS(products) {
    let res = ''
    if(products.length) {
        res += `
        <style>
            .table td, .table th {
                vertical-align : middle;
            }
        </style>
        <h2>Product list</h2>
        <div class="table-responsive">
            <table class="table table-dark">
                <tr> <th>Title</th> <th>Price</th> <th>Image</th> </tr>
        `
        res += products.map(product => `
                <tr>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                    <td><img width="50" src="${product.thumbnail}" alt="not found"></td>
                </tr>
        `).join(' ')
        res += `
            </table>
        </div>`
    }
    return res
}

function data2TableHBS(products,cb) {
    
    fetch('templates/table.hbs')
    .then(response => response.text())
    .then( template => {
        console.log('------- template --------')
        console.log(template)

        console.log('---------- html ----------')
        var template = Handlebars.compile(template);
        let html = template({ products: products })
        console.log(html)

        cb(html)
    })
}
