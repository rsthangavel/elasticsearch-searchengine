const es_operations = require('../es_operations');



module.exports = {
    create: function (req, res) {
        const data = req.body;
        es_operations.createIndex(data, function(err, response, status) {
            console.log(err, response, status);
            if(err) res.send(err);
           
            else res.send({response, status});
        });
    },
    delete: function (req, res) {
        const data = req.body;

        es_operations.deleteIndex(data, function(err, response, status) {
            console.log(err, response, status);
            if(err) res.send(err);
           
            else res.send({response, status});
        });
    }
}