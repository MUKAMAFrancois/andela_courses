// routers
const express = require('express');
const router = express.Router();

const {

    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
    } = require('../controllers/test_controllers');



router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.patch('/:id', updateTodo); // patch is used to update a part of the data
router.delete('/:id',deleteTodo);


module.exports = router;
