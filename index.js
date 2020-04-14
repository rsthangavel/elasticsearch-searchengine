const port    = process.env.PORT || 3030;
const http    =  require('http');
var app = require('./server/config/express');
var server    = http.createServer(app);
// require('./server/addons/es-seed');
server.listen(port, () => console.log(`API running on localhost:${port}`));