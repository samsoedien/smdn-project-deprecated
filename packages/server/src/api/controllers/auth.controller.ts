import { RequestHandler, Request } from 'express'

import { setAuthTokenService, setCookieOptionsService } from '../services/auth.service'

const crypto = require('crypto')

const ErrorResponse = require('../../utils/errorResponse')
const sendEmailService = require('../services/sendEmail')

const { hashPasswordService, comparePasswordsService } = require('../services/passwordService')

const UserModel = require('../models/User.model')

interface IRequestUser extends Request {
  user?: any
}

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
export const registerUser: RequestHandler = async (req, res, next) => {
  const { name, email, password, role } = req.body
  try {
    const hashedPassword = await hashPasswordService(password)

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    })

    const token = await setAuthTokenService(user)
    const cookieOptions = await setCookieOptionsService()

    return res.status(200).cookie('token', token, cookieOptions).json({ success: true, token })
  } catch (err) {
    return next(err)
  }
}

export const loginUser: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body
  try {
    if (!email || !password) return res.status(422).json({ errors: 'Invalid credentials' }) // TODO: Implement with express validator

    const user = await UserModel.findOne({ email }).select('+password')

    if (!user) return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] })

    const matchPassword = comparePasswordsService(password, user.password)

    if (!matchPassword) return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] })

    const token = await setAuthTokenService(user)
    const cookieOptions = await setCookieOptionsService()

    return res.status(200).cookie('token', token, cookieOptions).json({ success: true, token })
  } catch (err) {
    return next(err)
  }
}

export const logoutUser: RequestHandler = async (req, res, next) => {
  try {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    })

    return res.status(200).json({ success: true, data: {} })
  } catch (err) {
    return next(err)
  }
}

export const getMe: RequestHandler = async (req: IRequestUser, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id)

    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const updateUserDetails: RequestHandler = async (req: IRequestUser, res, next) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
    }

    const user = await UserModel.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const updateUserPassword: RequestHandler = async (req: IRequestUser, res, next) => {
  const { password } = req.body
  const { id } = req.user
  try {
    const user = await UserModel.findById(id).select('+password')

    const matchPassword = comparePasswordsService(password, user.password)
    if (!matchPassword) return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] })

    user.password = req.body.newPassword
    await user.save()

    return res.status(200).json({ success: true, data: user })
  } catch (err) {
    return next(err)
  }
}

export const forgotUserPassword: RequestHandler = async (req, res, next) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email })

    if (!user) return res.status(404).json({ errors: [{ msg: 'No User found' }] })

    const resetToken = crypto.randomBytes(20).toString('hex')

    const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    const passwordResetExpire = Date.now() + 10 * 60 * 1000

    user = await UserModel.findByIdAndUpdate(user.id, {
      passwordResetToken,
      passwordResetExpire,
    })

    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`

    await sendEmailService({
      email: user.email,
      subject: 'Password reset token',
      message,
    })

    return res.status(200).json({ success: true, message: 'Email sent' })
  } catch (err) {
    // console.log(err);
    // user.passwordResetToken = undefined;
    // user.passwordResetExpire = undefined;

    // await User.save({ validateBeforeSave: false });

    return next(err)
  }
}

export const resetUserPassword: RequestHandler = async (req, res, next) => {
  try {
    const passwordResetToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex')

    const user = await UserModel.findOne({
      passwordResetToken,
      passwordResetExpire: { $gt: Date.now() },
    })

    if (!user) return res.status(400).json({ msg: 'There is no user' })

    user.password = req.body.password
    user.passwordResetToken = undefined
    user.passwordResetExpire = undefined

    // Put encrypt password middleware here

    // Send token response

    await user.save()

    return res.status(200).json({ success: true })
  } catch (err) {
    return next(err)
  }
}
