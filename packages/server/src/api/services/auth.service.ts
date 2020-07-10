import jwt from 'jsonwebtoken'

export const setAuthTokenService = (user: any) => {
  // @ts-ignore
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })

  return token
}

export const setCookieOptionsService = () => {
  const options: any = {
    // @ts-ignore
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  if (process.env.NODE_ENV === 'productions') options.secure = true

  return options
}
