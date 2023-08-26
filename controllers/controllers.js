
// importacion de querys
const {
    queryAllListRooms, queryAllListReservations, queryAllUser, queryCreateReservation, queryCreateUser,
    queryCreateRooms, querySearchRoomID, querySearchReservationId, querySearchUserId, queryUpdateRoomId,
    queryUpdateReservationId, queryUpdateUserId, queryDeleteRommId, queryDeleteReservationId, queryDeleteUserId
, queryeReservationsUserId
} = require("../querys");

// Database credentials
const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

// ============ List all the rooms ================
const allDataRooms = async (req, res) => {
    const client = await pool.connect();

    try {
        const response = await client.query(queryAllListRooms);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ List all the reservations ================
const allDataReservations = async (req, res) => {
    const client = await pool.connect();

    try {
        const response = await client.query(queryAllListReservations);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============== List all the Users ======================

const allDataUser = async (req, res) => {
    const client = await pool.connect();

    try {
        const response = await client.query(queryAllUser);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Create a reservation ================

const createReservation = async (req, res) => {
    const client = await pool.connect();
    const { user_id, room_id, time_start, time_end} = req.body;
    const values = [user_id, room_id, time_start, time_end];


    try {
        const response = await client.query(queryCreateReservation, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Create a Users ================

const createUser = async (req, res) => {
    const client = await pool.connect();
    const { name, email, images } = req.body;

    const values = [name, email, images];
    try {
        const response = await client.query(queryCreateUser, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Create a Rooms ================

const createRooms = async (req, res) => {
    const client = await pool.connect();

    const { name, tv, air_conditioning, images, description } = req.body;

    const values = [name, tv, air_conditioning, images, description];
    try {
        const response = await client.query(queryCreateRooms, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
};

// ============ Search a Rooms for ID ================

const searchRooms = async (req, res) => {
    const client = await pool.connect();
    const room_id = req.params.id;
    const values = [room_id];

    try {
        const response = await client.query(querySearchRoomID, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }

};

// ============ Search a Reservation for ID================

const searchReservationId = async (req, res) => {
    const client = await pool.connect();
    const reservation_id = req.params.id;
    const values = [reservation_id];

    try {
        const response = await client.query(querySearchReservationId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
};

// ============ Search a Reservation for User ID ================

const searchReservationUserId = async (req, res) => {
const client = await pool.connect();
const user_id = req.params.id;
const values = [user_id];

try {
    const response = await client.query(queryeReservationsUserId, values);
    res.status(200).json({ response: true, result: response.rows });
} catch (error) {
    res.status(400).json({ response: false, error: error.message });
} finally {
    client.release(true);
}

}

// ============ Search a User for ID================

const searchUserId = async (req, res) => {
    const client = await pool.connect();
    const user_id = req.params.id;
    const values = [user_id];

    try {
        const response = await client.query(querySearchUserId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
};

// ============ Update Rooms for ID================

const updateRoomId = async (req, res) => {
    const client = await pool.connect();
    const room_id = req.params.id;
    const { name, tv, air_conditioning, images, description } = req.body;
    const values = [name, tv, air_conditioning, images, description, room_id];

    try {
        const response = await client.query(queryUpdateRoomId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
};

// ============ Update Reservations for ID================

const updateReservationId = async (req, res) => {
    const client = await pool.connect();
    const reservation_id = req.params.id;
    const values = [reservation_id];
    try {
        const response = await client.query(queryUpdateReservationId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Update Users for ID================

const updateUserId = async (req, res) => {
    const client = await pool.connect();
    const user_id = req.params.id;
    const { name } = req.body;
    const values = [name, user_id];

    try {
        const response = await client.query(queryUpdateUserId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }

}

// ============ Delete Rooms for ID================

const deleteRoomId = async (req, res) => {
    const client = await pool.connect();
    const room_id = req.params.id;
    const values = [room_id]

    try {
        const response = await client.query(queryDeleteRommId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Delete Reservations for ID================

const deleteReservationId = async (req, res) => {
    const client = await pool.connect();
    const reservation_id = req.params.id;
    const values = [reservation_id];

    try {
        const response = await client.query(queryDeleteReservationId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

// ============ Delete Users for ID================

const DeleteUserId = async (req, res) => {
    const client = await pool.connect();
    const user_id = req.params.id;
    const values = [user_id];

    try {
        const response = await client.query(queryDeleteUserId, values);
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

module.exports = {
    allDataRooms, allDataReservations, allDataUser, createReservation, createUser
    , createRooms, searchRooms, searchReservationId, searchUserId, updateRoomId,
    updateReservationId, updateUserId, deleteRoomId, deleteReservationId, DeleteUserId, searchReservationUserId
} 