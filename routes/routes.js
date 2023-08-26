const express = require("express")
const router = express.Router();
const middleware = require("../middleware/middleware")

const {
    allDataRooms, allDataReservations, allDataUser, createReservation, createUser, createRooms, 
    searchRooms, searchReservationId, searchUserId, updateRoomId, updateReservationId, updateUserId, deleteRoomId, deleteReservationId, DeleteUserId, searchReservationUserId
} = require("../controllers/controllers");

//Routes GET
router.get("/rooms", allDataRooms);
router.get("/reservations", allDataReservations);
router.get("/users", allDataUser);

// Routes POST
router.post('/reservations', createReservation);
router.post('/users',middleware, createUser);
router.post('/rooms', createRooms);

// Routes GET ID
router.get('/rooms/:id', searchRooms);
router.get('/reservations/:id', searchReservationId);
router.get('/users/:id', searchUserId);

// Routes GET for ID Users
router.get('/reservations/user/:id', searchReservationUserId);



// Routes PATCH ID 
router.patch('/rooms/update/:id', updateRoomId);
router.patch('/reservations/update/:id', updateReservationId);
router.patch('/users/update/:id', updateUserId);

// Routes DELETE ID 
router.delete('/rooms/delete/:id', deleteRoomId);
router.delete('/reservations/delete/:id', deleteReservationId);
router.delete('/users/delete/:id', DeleteUserId);

module.exports = router;