import express from 'express'
const router = express.Router();

import { createUser, updateUser, findOneImage, listUser, removeImage } from '../controller/imageController';
router.post('/image/create', createUser);
router.put("/image/edit/:imageId", updateUser);
router.delete('/image/:imageId', removeImage);
router.get("/image",listUser);
router.get("/image/:imageId",findOneImage)
module.exports = router;