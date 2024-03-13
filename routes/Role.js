import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneRole, listUser, removeRole } from '../controller/roleController';
router.post('/role/create', createUser);
router.put("/role/edit/:roleId", updateUser);
router.delete('/role/:roleId', removeRole);
router.get("/role",listUser);
router.get("/role/:roleId",findOneRole)
module.exports = router;