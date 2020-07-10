const mongoose = require('mongoose')

// export type UserDocument = Document & {
//   name: string;
//   email: string;
//   role: string;
//   password: string;
//   passwordResetToken: string;
//   passwordResetExpires: Date;
// };

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    // match: [

    // ]
  },
  role: {
    type: String,
    enum: ['user', 'publisher'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
