const { PORT } = require('./config/globals')
const app = require('./server');

app.listen(8080, () => console.log(`http://localhost:8080`))