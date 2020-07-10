const bcrypt = require('bcryptjs')

export const hashPasswordService = async (password: string) => {
  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

export const comparePasswordsService = async (submittedPassword: string, password: string) => {
  const matchPassword = await bcrypt.compare(password, submittedPassword)
  return matchPassword
}
