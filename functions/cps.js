const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;


exports.handler = async (event, context) => {
  let { category } = event.queryStringParameters;

  const headers = {}
  if (process.env.NODE_ENV !== 'production') {
    headers['Access-Control-Allow-Origin'] = '*'
  }

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db('cps');
    const pages = db.collection('pages');

    const cps = await pages.find().toArray();
    console.log({cps});

    await client.close();
    return {
      statusCode: 200,
      body: JSON.stringify(cps),
      headers
    };


  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
