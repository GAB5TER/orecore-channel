var channel = require('../');
var orecore = require('orecore-lib');


var refundKey = new orecore.PrivateKey(orecore.Networks.testnet);
var fundingKey = new orecore.PrivateKey(orecore.Networks.testnet);
var commitmentKey = new orecore.PrivateKey(orecore.Networks.testnet);

console.log('funding key: ' + refundKey.toString());
console.log('refund key: ' + fundingKey.toString());
console.log('commitment key: ' + commitmentKey.toString());
