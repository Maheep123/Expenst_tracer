const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');

// Route to get all expenses for a user
router.get('/:userId', expenseController.getAllExpenses);

// Route to create a new expense
router.post('/', expenseController.createExpense);

// Route to update an expense
router.put('/:expenseId', expenseController.updateExpense);

// Route to delete an expense
router.delete('/:expenseId', expenseController.deleteExpense);

module.exports = router;
