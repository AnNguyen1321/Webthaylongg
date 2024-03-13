import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneComment, listUser, removeComment } from '../controller/commentController';
router.post('/comment/create', createUser);
router.put("/comment/edit/:commentId", updateUser);
router.delete('/comment/:commentId', removeComment);
router.get("/comment",listUser);
router.get("/comment/:commentId",findOneComment)
module.exports = router;