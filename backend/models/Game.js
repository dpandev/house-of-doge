const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  players: [{
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    default: []
  }],
  bets: [{
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bet'
    }],
    default: []
  }],
  busted_at: {
    type: Number
  }
}, {timestamps: true})

module.exports = mongoose.model('Game', GameSchema)