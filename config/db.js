const mysql = require('mysql');
const Util = require('util');

const dbConf = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "VikriAgung1105",
    database: "terralogiqdb"
});

const dbQuery = Util.promisify(dbConf.query).bind(dbConf);
module.exports = { dbConf, dbQuery }