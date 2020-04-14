var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database Connection Established");
});
module.exports = mongoose.connect('mongodb://localhost/elasticsearch', { useNewUrlParser: true });