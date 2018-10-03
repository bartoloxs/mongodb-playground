const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDb server');
  }
  console.log('Connected to mongoDb');
  const db = client.db('TodoApp');

  //delete many
  db.collection('Todos').deleteMany({text: 'Task one'}).then(result => {
    console.log(result);
  });

  //Delete one
  // db.collection('Todos').deleteOne({ text: 'Task two' }).then(result => {
  //   console.log(result);
  // });

  //find one and delete
  db.collection('Todos')
    .findOneAndDelete({ completed: false })
    .then(result => {
      console.log(result);
    });

  // db.close();
});