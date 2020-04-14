const elasticsearch = require('elasticsearch');

const es = (function () {
    //private
    options = {
        host: 'localhost:9200',
        // log: 'trace',
        apiVersion: '6.8'
    };
    const client = new elasticsearch.Client(options);
    function checkConnection() {
        //check connection available
        client.ping({
            // ping usually has a 3000ms timeout
            requestTimeout: 1000
        }, function (error) {
            if (error) {
                console.trace('elasticsearch cluster is down!');
            } else {
                console.log('elasticsearch connection established');
                // health checkup
            }
        });
    }
    checkConnection();
    return {
        client: client,
        checkConnection: checkConnection
    }
})();
module.exports = es;