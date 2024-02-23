// src/routes/todo_routes.ts
import express, { Router } from 'express';
import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo
} from '../controllers/todo_controllers';

const router: Router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: CRUD operations for todos
 */

/**
 * @swagger
 * /api/v1/listtodos:
 *   get:
 *     summary: Retrieve all todos
 *     tags: [Todos]
 *     responses:
 *       '200':
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
// router.get('/', getAllTodos);

/**
 * @swagger
 * /api/v1/listtodos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '201':
 *         description: A new todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
// router.post('/', createTodo);

/**
 * @swagger
 * /api/v1/listtodos/{id}:
 *   get:
 *     summary: Retrieve a single todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single todo object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '404':
 *         description: Todo not found
 */
// router.get('/:id', getTodoById);

/**
 * @swagger
 * /api/v1/listtodos/{id}:
 *   patch:
 *     summary: Update a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '200':
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '404':
 *         description: Todo not found
 */
// router.patch('/:id', updateTodo);

/**
 * @swagger
 * /api/v1/listtodos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Todo deleted successfully
 *       '404':
 *         description: Todo not found
 */
// router.delete('/:id', deleteTodo);

// module.exports = router;


// Routes
router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
