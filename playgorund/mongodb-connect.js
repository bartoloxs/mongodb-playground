const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDb server');
  }
  console.log('Connected to mongoDb');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Some text todo',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo');
    }
    console.log(JSON.stringify(result.ops, undefined, 4));
  });

  db.collection('Users').insertOne({
    name: 'Carlos',
    age: 31,
    location: 'España'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }

    console.log(result.ops);
  });

  db.close();
});