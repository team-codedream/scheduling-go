const pool = require('../src/utils/dbPool');

async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT 1 AS result');
    console.log(rows); // [ { result: 1 } ] if success; otherwise, it throws error

  } catch (err) {
    console.err("failed to connect to DB", err.code || err.message);
  } finally {
    if (conn) {
        conn.release();
    }
  }
}

async function testTables() {
  let conn;
  const tables = ['USER_TBL', 'EVENT_TBL'];
  try {
    conn = await pool.getConnection();
    const placeholders = tables.map(() => '?').join(',');
    const sql = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = ?
        AND table_name IN (${placeholders})
    `;
    const rows = await conn.query(sql, ['scheduling_go', ...tables]);
    const found = rows.map(r => r.table_name);
    tables.forEach(t =>
      console.log(`${t} table ${found.includes(t) ? 'exists' : 'not exist'}`)
    );
  } catch (err) {
    console.error('fail to search table:', err.message);
  } finally {
    if (conn) {
      conn.release();
    }
  }
}

testConnection();
testTables();