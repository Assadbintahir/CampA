/**
 * Created by imran on 21/02/2018.
 */

'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth.service');
const controller = require('./people.controller');

router.get('/:id', auth.isAuthenticated(), controller.index);
router.post('/update', auth.isAuthenticated(), controller.update);

module.exports = router;
