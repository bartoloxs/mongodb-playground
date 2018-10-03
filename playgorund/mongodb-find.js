const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDb server');
  }
  console.log('Connected to mongoDb');
  const db = client.db('TodoApp');

  db.collection('Todos')
    .find({ completed: true })
    .toArray()
    .then(docs => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 4));
    }, err => {
      console.log('Unable to fetch todos', err);
    })

  db.close();
});