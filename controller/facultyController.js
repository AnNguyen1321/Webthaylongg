import Faculty from '../models/Faculty';
import _ from 'lodash';

export const listUser = (req, res) => {
    Faculty.find()
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

export const removeFaculty = (req, res) => {
  let user = req.user;
  user.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: 'Delete Faculty failure',
      });
    }
    res.json({
      message: 'Delete user successfully',
    });
  });
};

export const createUser = (req, res) => {
  const faculty = new Faculty(req.body);
  faculty.save((err, data) => {
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
      message: 'Update Faculty successfully',
    });
  });
};

export const findOneFaculty = async (req, res) => {
    const { facultyId } = req.params
    try {
        const result = await Faculty.findById({ _id: facultyId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay nguoi dung"
        })
    }

}