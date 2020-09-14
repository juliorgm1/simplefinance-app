const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const getTransactionPeriod = async (req, res, next) => {
  try {
    const transaction = await TransactionModel.find(req.query);
    res.send(transaction);
  } catch (error) {
    next(error);
  }
};

const createTransaction = async (req, res, next) => {
  try {
    const transaction = new TransactionModel(req.body);
    transaction.save();
    res.send(transaction);
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const id = req.body.id;

    if (!id)
      throw new Error(
        'para realizar essa operação é obrigatório informar o identificador da transação'
      );

    const transaction = await TransactionModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.send(transaction);
  } catch (error) {
    next(error);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const id = req.body.id;

    if (!id)
      throw new Error(
        'para realizar essa operação é obrigatório informar o identificador da transação'
      );

    const transaction = await TransactionModel.findByIdAndDelete({ _id: id });
    res.send(transaction);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTransactionPeriod,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
