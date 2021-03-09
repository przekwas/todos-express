const express = require('express');
const TodoStore = require('../utils/todos-store');

const router = express.Router();

// GET http://localhost:3000/api/todos/123
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = TodoStore.GetTodo(id);
    res.json(todo);
});

// GET http://localhost:3000/api/todos/
router.get('/', (req, res) => {
    const todos = TodoStore.GetTodos();
    res.json(todos);
});

// POST http://localhost:3000/api/todos/
// { title: string, content: string }
router.post('/', (req, res) => {
    const newTodo = req.body;
    TodoStore.CreateTodo(newTodo);
    res.json({ msg: 'todo added' });
});

// POST http://localhost:3000/api/todos/123
// { title: string, content: string }
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editedTodo = req.body;
    TodoStore.UpdateTodo(id, editedTodo);
    res.json({ msg: `todo id ${id} edited` });
});

// DELETE http://localhost:3000/api/todos/123
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    TodoStore.DeleteTodo(id);
    res.json({ msg: `todo id ${id} deleted`});
});

module.exports = router;