'use strict';

var spec = {
  name: 'Channel',
  message: 'Internal Error on orecore-channels Module {0}',
};

module.exports = require('orecore-lib').errors.extend(spec);
