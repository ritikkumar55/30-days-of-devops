const { todos, createTodo } = require("../models/todo.model");

exports.createTodo = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });
  res.status(201).json(createTodo(title));
};

exports.getTodos = (req, res) => res.json(todos);

exports.updateTodo = (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Not found" });
  todo.completed = !todo.completed;
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const idx = todos.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  todos.splice(idx, 1);
  res.json({ message: "Deleted" });
};