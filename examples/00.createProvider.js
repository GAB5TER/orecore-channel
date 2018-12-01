var channel = require('../');
var orecore = require('orecore-lib');


var providerKey = new orecore.PrivateKey(orecore.Networks.testnet);

console.log('provider key: ' + providerKey.toString());
