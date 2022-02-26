const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    max: 50,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  friends: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    validate: [friendsLimit, 'Maximum number of friends reached'],
    default: [],
  },
  user_type: {
    type: Number,
    required: true,
    enum: [0, 1, 2],
    default: 2,
  },
  account: {
    desposits: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deposit'
      }],
      default: [],
    },
    withdrawals: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Withdrawal'
      }],
      default: [],
    },
    games: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
      }],
      default: [],
    },
    balance: {
      type: Number,
      default: 0,
    },
    bets: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bet'
      }],
      default: [],
    }
  }
}, {timestamps: true})

function friendsLimit(value) {
  return value.length < 50
}

module.exports = mongoose.model('User', UserSchema)