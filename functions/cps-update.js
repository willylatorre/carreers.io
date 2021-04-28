const { MongoClient, ObjectId } = require('mongodb')
const url = process.env.MONGO_URL

exports.handler = async (event, context) => {
  let body = event.body
  const page = JSON.parse(body)
  let pageMinusId = { ...page }
  delete pageMinusId._id

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db('cps')
    const pages = db.collection('pages')
    const pag = await pages.findOneAndReplace(
      { _id: ObjectId(page._id) },
      pageMinusId,
      { returnOriginal: false }
    )
    await client.close()
    return {
      statusCode: 200,
      body: JSON.stringify(pag.value),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
