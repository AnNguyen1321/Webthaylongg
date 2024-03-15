import Image from '../models/FileUpload';
import _ from 'lodash';

export const listUser = (req, res) => {
    Image.find()
    .sort({
      updatedAt: -1,
    })
    .exec((err, data) => {
      if (err) {
        return res.status(500).json({ Error: err });
      }
      return res.status(200).json({ data });
    });
};

export const removeImage = (req, res) => {
  let user = req.user;
  user.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: 'Delete Image failure',
      });
    }
    res.json({
      message: 'Delete user successfully',
    });
  });
};

export const createUser = (req, res) => {
  const image = new Image(req.body);
  image.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      data,
      message: 'Create user successfully',
    });
  });
};

export const updateUser = (req, res) => {
  let user = req.user;
  user = _.assignIn(user, req.body);

  user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      data,
      message: 'Update Image successfully',
    });
  });
};

export const findOneImage = async (req, res) => {
    const { imageId } = req.params
    try {
        const result = await Image.findById({ _id: imageId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay nguoi dung"
        })
    }

}