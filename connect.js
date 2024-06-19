require('dotenv').config({ path: 'config.env' })
const mongoose = require('mongoose')

const connectBDD = async () => {
    try {
        const connexion = await mongoose.connect(process.env.MONGODB_CONNEXION)
        console.log(` URL Conneection string  ${connexion.connection.host}`);
        console.log(` Connected database: ${connexion.connection.db.databaseName}`);

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectBDD