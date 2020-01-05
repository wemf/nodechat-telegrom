const db = require('mongoose');

db.Promise = global.Promise;

async function connect(uri) {
    await db.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] conectada con éxito');
}

module.exports = { 
    connect: connect
};