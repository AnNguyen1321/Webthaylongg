import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneContribution, listUser, removeContribution } from '../controller/contributionController';
router.post('/contribution/create', createUser);
router.put("/contribution/edit/:contributionId", updateUser);
router.delete('/contribution/:contributionId', removeContribution);
router.get("/contribution",listUser);
router.get("/contribution/:contributionId",findOneContribution)
module.exports = router;