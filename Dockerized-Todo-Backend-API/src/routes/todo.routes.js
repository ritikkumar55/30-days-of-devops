const router = require("express").Router();
const c = require("../controllers/todo.controller");

router.post("/", c.createTodo);
router.get("/", c.getTodos);
router.put("/:id", c.updateTodo);
router.delete("/:id", c.deleteTodo);

module.exports = router;