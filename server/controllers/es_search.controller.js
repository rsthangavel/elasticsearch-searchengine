const es_operations = require('../es_operations');



module.exports = {
    search: function(req, res) {
        let option = req.body;
        console.log(option);
        es_operations.search(option, function(err, response, status){
            if(err) res.send(err);
            else res.send(response);
        });
    }
}