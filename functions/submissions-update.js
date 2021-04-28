const { MongoClient, ObjectId } = require('mongodb')
const url = process.env.MONGO_URL

exports.handler = async (event, context) => {
  let body = event.body
  const submission = JSON.parse(body)
  let submissionMinusId = { ...submission }
  delete submissionMinusId._id

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db('cps')
    const submissions = db.collection('submissions')
    const sub = await submissions.findOneAndReplace(
      { _id: ObjectId(submission._id) },
      submissionMinusId,
      { returnOriginal: false }
    )
    await client.close()
    return {
      statusCode: 200,
      body: JSON.stringify(sub.value),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
