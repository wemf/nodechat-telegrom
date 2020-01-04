const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect(process.env.DB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] conectada con éxito');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

module.exports =  {
    add: addMessage,
    list: getMessages
}