const es_operations = require('../es_operations');
const fetch = require('node-fetch');

async function getList(callback) {
    let response = await fetch('https://raw.githubusercontent.com/elastic/elasticsearch/master/docs/src/test/resources/accounts.json');
    if (response.ok) {
        let json = await response.text();
        callback(json)
    }
}
getList(function (data) {
    es_operations.deleteIndex(function (err, res) {
        es_operations.bulkInsert(data, function (err, response, status) {
            if (err) {
                console.trace("Elasticsearch err:", err);
            } else {
                console.log("Sample data inserted:", response);
            }
        });
    })
})
