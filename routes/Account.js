import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneAccount, listUser, removeAccount } from '../controller/accountControler';
router.post('/account/create', createUser);
router.put("/account/edit/:accountId", updateUser);
router.delete('/account/:accountId', removeAccount);
router.get("/account",listUser);
router.get("/account/:accountId",findOneAccount)
module.exports = router;