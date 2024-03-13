import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneFaculty, listUser, removeFaculty } from '../controller/facultyController';
router.post('/faculty/create', createUser);
router.put("/faculty/edit/:facultyId", updateUser);
router.delete('/faculty/:facultyId', removeFaculty);
router.get("/faculty",listUser);
router.get("/faculty/:facultyId",findOneFaculty)
module.exports = router;