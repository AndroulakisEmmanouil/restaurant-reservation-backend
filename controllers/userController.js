const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant_reservation',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const db = pool.promise();

exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.registerUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        await db.execute(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );
        res.json({ message: "Ο χρήστης δημιουργήθηκε επιτυχώς!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        await db.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );
        res.json({ message: "Ο χρήστης ενημερώθηκε επιτυχώς!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await db.execute(
            'DELETE FROM users WHERE id = ?',
            [id]
        );
        res.json({ message: "Ο χρήστης διαγράφηκε επιτυχώς!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};