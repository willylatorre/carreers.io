const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;


exports.handler = async (event, context) => {
  let body = event.body;
  const submission = JSON.parse(body);
  const submissionMinusId = { ...submission }
  delete submissionMinusId._id

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db('cps');
    const submissions = db.collection('submissions');

    const insertedSubmission = await submissions.insertOne(submissionMinusId)

    await client.close();
    return {
      statusCode: 200,
      body: JSON.stringify(insertedSubmission)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
