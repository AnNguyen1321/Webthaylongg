import Role from '../models/Role';
import _ from 'lodash';


export const getAllRoles = (req, res) => {
     const roles = Role.find({});
     return roles;
};
export const listUser = (req, res) => {
    Role.find()
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

export const removeRole = (req, res) => {
  let user = req.user;
  user.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: 'Delete Role failure',
      });
    }
    res.json({
      message: 'Delete user successfully',
    });
  });
};

export const createUser = (req, res) => {
  const role = new Role(req.body);
  role.save((err, data) => {
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
      message: 'Update Role successfully',
    });
  });
};

export const findOneRole = async (req, res) => {
    const { roleId } = req.params
    try {
        const result = await Role.findById({ _id: roleId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay nguoi dung"
        })
    }

}