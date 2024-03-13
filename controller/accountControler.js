import Account from '../models/Account';
import _ from 'lodash';

export const listUser = async (req, res) => {
    const user = await Account.find()
    return res.status(200).json({ user})
};

export const removeAccount = (req, res) => {
  let user = req.user;
  user.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: 'Delete Account failure',
      });
    }
    res.json({
      message: 'Delete user successfully',
    });
  });
};

export const createUser = (req, res) => {
  const account = new Account(req.body);
  account.save((err, data) => {
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
      message: 'Update Account successfully',
    });
  });
};

export const findOneAccount = async (req, res) => {
    const { accountId } = req.params
    try {
        const result = await Account.findById({ _id: accountId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay nguoi dung"
        })
    }

}
