const pgp = require('pg-promise')();
const connectionString = 'postgresql://postgres:ahmad-97@localhost:5432/ToComfort';

const db = pgp(connectionString);

module.exports = db;
