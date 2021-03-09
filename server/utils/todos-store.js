const fs = require('fs');
let todos = { nextid: 0 };

if (fs.existsSync('todos.json')) {
	todos = JSON.parse(fs.readFileSync('todos.json'));
}

const getTodos = () => {
	return Object.assign({}, todos);
};

const getTodo = id => {
	return Object.assign({}, todos[id]);
};

const createTodo = todo => {
	todos[todos.nextid++] = todo;
	writeTodos();
};

const updateTodo = (id, todo) => {
	todos[id] = todo;
	writeTodos();
};

const deleteTodo = id => {
	delete todos[id];
	writeTodos();
};

const writeTodos = () => {
	fs.writeFileSync('todos.json', JSON.stringify(todos));
};

module.exports = {
	CreateTodo: createTodo,
	DeleteTodo: deleteTodo,
	GetTodos: getTodos,
	GetTodo: getTodo,
	UpdateTodo: updateTodo
};