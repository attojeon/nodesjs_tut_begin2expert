require('../config/config');
const {MongoClient} = require('mongodb');


MongoClient.connect(process.env.MONGDB_URI, (err, db) => {
    if(err) {
        return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // Create collection 'Todos' - 한 번만 실행하세요.
    // let dbase = db.db('tododb');
    // dbase.createCollection( 'Todos', {
    //     collation: { locale: "kr"}
    // }, (err, res) => {
    //     if( err ) {
    //         return console.log('Unable to create collection', err);
    //     }
    //     console.log('Collection created succefully');
    // });

    dbase.collection('Todos').insertOne( {
        text: '출근해서 수업후기 작성하기',
        completed: false,
        completedAt: false
    }, (err, result) => {
        if( err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    

    db.close();
});

