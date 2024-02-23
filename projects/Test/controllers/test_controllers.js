// controllers/test_controllers.js

const Todo = require('../models/testmodel'); // this variable contains Model data

// get all
exports.getAllTodos = async (req, res) => {
    try {
      const todos = await Todo.find(); // todos is a variable that contains all the data from the model
      res.status(200).json({
        success: true,
        data: todos
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };
  

  // create new

  exports.createTodo = async (req, res) => {
    try {
      const todo = await Todo.create(req.body);
      res.status(201).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

  // get one

    exports.getTodoById = async (req, res) => {
      try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
          return res.status(404).json({
            success: false,
            error: 'No todo found'
          });
        }
        res.status(200).json({
          success: true,
          data: todo
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
    }

// update one: id,req.body

exports.updateTodo = async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // this will return the updated data
        runValidators: true // this will run the validators in the model
      });
      if (!todo) {
        return res.status(404).json({
          success: false,
          error: 'Todo not found'
        });
      }
      res.status(200).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message
      });
    }
  };


  // delete one

exports.deleteTodo = async (req, res) => {
        try {
            const todo = await Todo.findByIdAndDelete(req.params.id);
            if (!todo) {
            return res.status(404).json({
                success: false,
                error: 'Todo not found'
            });
            }
            res.status(200).json({
            success: true,
            data: {}
            });
        } catch (error) {
            res.status(500).json({
            success: false,
            error: 'Server Error'
            });
        }
        };