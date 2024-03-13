import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneGuest, listUser, removeGuest } from '../controller/guestController';
router.post('/guest/create', createUser);
router.put("/guest/edit/:guestId", updateUser);
router.delete('/guest/:guestId', removeGuest);
router.get("/guest",listUser);
router.get("/guest/:guestId",findOneGuest)
module.exports = router;