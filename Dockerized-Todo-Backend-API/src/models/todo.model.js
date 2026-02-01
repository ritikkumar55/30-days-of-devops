const { v4: uuidv4 } = require("uuid");
const todos = [];
module.exports = {
  todos,
  createTodo(title) {
    const todo = { id: uuidv4(), title, completed: false, createdAt: new Date() };
    todos.push(todo);
    return todo;
  }
};