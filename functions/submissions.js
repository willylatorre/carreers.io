const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;


exports.handler = async (event, context) => {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db('cps');
    const submissions = db.collection('submissions');

    const subs = await submissions.find().toArray();

    await client.close();
    return {
      statusCode: 200,
      body: JSON.stringify(subs)
    };


  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
