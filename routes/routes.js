const express = require('express');
const {
  getTransactionPeriod,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('/', getTransactionPeriod);
transactionRouter.post('/', createTransaction);
transactionRouter.patch('/', updateTransaction);
transactionRouter.delete('/', deleteTransaction);

transactionRouter.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send(err);
});

module.exports = transactionRouter;
