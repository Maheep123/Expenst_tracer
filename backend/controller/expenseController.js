const Expense = require('../models/expense');

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.params.userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createExpense = async (req, res) => {
    const { user, name, amount, category, date } = req.body;
    try {
        const newExpense = new Expense({ user, name, amount, category, date });
        await newExpense.save();
        res.status(201).send("Expense created successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateExpense = async (req, res) => {
    const { name, amount, category, date } = req.body;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.expenseId, { name, amount, category, date }, { new: true });
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndRemove(req.params.expenseId);
        res.status(200).send("Expense deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};
