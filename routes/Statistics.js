import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneStatistics, listUser, removeStatistics } from '../controller/statisticsController';
router.post('/statistics/create', createUser);
router.put("/statistics/edit/:statisticsId", updateUser);
router.delete('/statistics/:statisticsId', removeStatistics);
router.get("/statistics",listUser);
router.get("/statistics/:statisticsId",findOneStatistics)
module.exports = router;