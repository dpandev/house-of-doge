const mongoose = require('mongoose')

const BetSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  },
  bet_amount: {
    type: Number
  },
  payout: {
    type: Number
  },
  busted_at: {
    type: Number
  },
  cashed_out: {
    type: Number
  },
  profit: {
    type: Number
  }
}, {timestamps: true})

module.exports = mongoose.model('Bet', BetSchema)