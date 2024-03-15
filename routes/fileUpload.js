import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneImage, listUser, removeImage } from '../controller/fileUploadController';
router.post('/fileUpload/create', createUser);
router.put("/fileUpload/edit/:fileId", updateUser);
router.delete('/fileUpload/:fileId', removeImage);
router.get("/fileUpload",listUser);
router.get("/fileUpload/:fileId",findOneImage)
module.exports = router;