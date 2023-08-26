
// ====================== Queries All Lists  ============

// All List Rooms
const queryAllListRooms = 'SELECT * FROM rooms';

// All list reservations
const queryAllListReservations = 'SELECT * FROM reservations';

// All list Users
const queryAllUser = 'SELECT * FROM users';

// ====================== Queries Create  ============

// Create reservation
const queryCreateReservation = 'INSERT INTO reservations (user_id, room_id, time_start, time_end, reservation_day) VALUES ($1, $2, $3, $4, NOW()::timestamp without time zone) RETURNING *';

// Create User
const queryCreateUser = 'INSERT INTO users (name, email, images) VALUES ($1, $2 , $3)';

// Create Rooms
const queryCreateRooms = 'INSERT INTO rooms (name, tv, air_conditioning, images, description) VALUES ($1, $2, $3, $4, $5)';


// =========================== Queries Search  ===================

// Search rooms for ID
const querySearchRoomID = `SELECT * FROM rooms WHERE room_id = $1`;

// Search reservation for ID
const querySearchReservationId = `SELECT * FROM reservations WHERE reservation_id = $1`;

// Search User for ID 
const querySearchUserId = `SELECT * FROM users WHERE user_id = $1`;

// Search Reservations for ID Users

const queryeReservationsUserId = `SELECT * FROM reservations WHERE user_id = $1`;

// =========================== Queries Update for id ========================

// Update Rooms for ID 
const queryUpdateRoomId = `UPDATE rooms SET name = $1, tv = $2 , air_conditioning = $3 , images = $4 , description = $5 WHERE room_id = $6`;

// Update Reservations for ID
const queryUpdateReservationId = `UPDATE reservations SET time_start = NOW()::timestamp without time zone , time_end =NOW()::timestamp without time zone WHERE reservation_id = $1 RETURNING *`;

// Update User for ID
const queryUpdateUserId = `UPDATE users SET name = $1 WHERE user_id = $2 RETURNING *`;

// =========================== Queries Delete for id ========================

//  Delete Rooms for ID
const queryDeleteRommId = `DELETE FROM rooms WHERE room_id = $1`;

// Delete Reservations for ID 
const queryDeleteReservationId = `DELETE FROM reservations WHERE reservation_id = $1 RETURNING *`;

// Delete Users for ID 
const queryDeleteUserId = `DELETE FROM users WHERE user_id = $1 RETURNING *`;




module.exports = {
    queryAllListRooms, queryAllListReservations, queryAllUser, queryCreateReservation, queryCreateUser,
    queryCreateRooms, querySearchRoomID, querySearchReservationId, querySearchUserId, queryUpdateRoomId,
    queryUpdateReservationId, queryUpdateUserId, queryDeleteRommId, queryDeleteReservationId, queryDeleteUserId, queryeReservationsUserId
} 