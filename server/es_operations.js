
const es_config = require('./config/es_config');
// const client = es_config.client;
const operations = (function(client) {
    let option = {
        index : 'cart',
        type: 'toys'
    }
    function createIndex(data, cb) {
        option.id = data.id;
        option.body = data.body;
        client.create(option, cb);
    }
    function deleteIndex(cb) {
      
        client.indices.delete({index: option.index}, cb);
    }
    function getCount(cb) {
        client.count(option, cb)
    }
    function search(data, cb) {
        console.log(data);
        option.body = data;
        // option.size = data.size || 100;
        // option.sort = [
        //     { "account_number" : "asc"}
        // ]
        client.search(option, cb);
    }
    function bulkInsert(body, cb) {
        option.body = body;
        client.bulk(option, cb);
    }
    function bulkdelete() {
        client.delete(option, cb);
    }
    return {
        createIndex : createIndex,
        deleteIndex : deleteIndex,
        search: search,
        bulkInsert: bulkInsert,
        getCount: getCount
    }
})(es_config.client);


module.exports = operations;