const bodyParser = require('body-parser');
const http = require('http');
const app = require('./app');
const db = require("./connection");



app.set('port', process.env.PORT || 3300);
const server = http.createServer(app);
app.use(bodyParser.json());
//app.use(cors())
server.listen(process.env.PORT || 3300);