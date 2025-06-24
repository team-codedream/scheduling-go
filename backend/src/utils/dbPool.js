const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '59.11.141.122',
  port: 55511,
  user: 'KDT_project',
  password: 'Kdtkdt!1120',
  database: 'scheduling_go',
  connectionLimit: 10
});

module.exports = pool;