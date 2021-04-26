const {MongoClient, ObjectId} = require('mongodb');
const url = process.env.MONGO_URL;


exports.handler = async (event, context) => {
  let body = event.body;
  let {id, action} = JSON.parse(body);

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db('cps');
    const submissions = db.collection('submissions');
    const pages = db.collection('pages')

    if (action === 'approve') {
      const sub = await submissions.findOne({ _id: ObjectId(id)})
      await pages.insertOne(sub)
    }

    await submissions.findOneAndDelete({ _id: ObjectId(id)})
    const subs = await submissions.find().toArray()
    await client.close();
    return {
      statusCode: 200,
      body: JSON.stringify(subs)
    };


  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
