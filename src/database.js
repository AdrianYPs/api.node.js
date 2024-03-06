import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Ay54321.',
    database: 'Prueba01'
});

export default pool;