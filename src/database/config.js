const knex = require("knex");
const config = require("../../knexfile");
require("dotenv").config();

const environment = process.env.NODE_ENV || 'development';

const db = knex(config[environment]);

db.raw('SELECT 1')
.then(() => {
    console.log('✅ Conexão com banco de dados estabelecida com sucesso!');
})
.catch((error) => {
    console.error('❌ Erro ao conectar com banco de dados');
})

module.exports = db;