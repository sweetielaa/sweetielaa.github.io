// Build Server
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Gunakan middleware cors
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Data area rawan kecelakaan, kejadian kecelakaan tahun 2022, 2023, dan 2024
app.get('/api/user', async (req, res) => {
    try {
        const client = await pool.connect();

        // Query untuk area Kota Semarang
        const queryArea = 'SELECT * FROM public."area_Semarang"';
        const resultArea = await client.query(queryArea);
        const areaSemarang = resultArea.rows;

        // Query untuk area rawan kecelakaan
        const queryRawan = 'SELECT * FROM public."area_rawan_kecelakaan"';
        const resultRawan = await client.query(queryRawan);
        const areaRawan = resultRawan.rows;

        // Query untuk kejadian tahun 2025
        const queryKejadian = 'SELECT * FROM public."kejadian_2025"';
        const resultKejadian = await client.query(querKejadian);
        const kejadian2025 = resultKejadian.rows;
        
        // Query untuk gangster tahun 2025
        const query2025 = 'SELECT * FROM public."gangster_2025"';
        const result2025 = await client.query(query2025);
        const gangster2025 = result2025.rows;
        


        // Query untuk kejadian kecelakaan tahun 2022
        const query2022 = 'SELECT * FROM public."kecelakaan_2022"';
        const result2022 = await client.query(query2022);
        const kecelakaan2022 = result2022.rows;

        

        client.release();

        res.json({ areaSemarang, areaRawan, gangster2025, kejadian2025 });
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
