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

const createTodo = chirp => {
	todos[todos.nextid++] = chirp;
	writeTodos();
};

const updateTodo = (id, chirp) => {
	todos[id] = chirp;
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