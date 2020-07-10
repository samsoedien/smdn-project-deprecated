import mongoose from 'mongoose'

const uri = '' // TEMP

const connectDB = async () => {
  try {
    const conn: any = await mongoose.connect(process.env.MONGO_URI || uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.info(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
