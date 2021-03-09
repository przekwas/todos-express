const express = require('express');
const todosRouter = require('./todos');

const router = express.Router();

router.use('/todos', todosRouter);

module.exports = router;