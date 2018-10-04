/**
 * Created by ryanpan on 2018-10-04.
 */
'use strict';

let express = require('express');

let router = express.Router();

require('./question.routes')(router);

module.exports = router;
