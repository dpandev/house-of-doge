const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  amount: {
    type: Number
  },
  balance_before: {
    type: Number
  },
  balance_after: {
    type: Number
  }
}, {timestamps: true})

module.exports = mongoose.model('Transaction', TransactionSchema)
module.exports = mongoose.model('Deposit', TransactionSchema)
module.exports = mongoose.model('Withdrawal', TransactionSchema)