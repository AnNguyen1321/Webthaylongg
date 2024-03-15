import Contribution from '../models/Contribution.js';
import _ from 'lodash';

export const listUser = (req, res) => {
    Contribution.find()
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

export const removeContribution = (req, res) => {
  let user = req.user;
  user.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: 'Delete Contribution failure',
      });
    }
    res.json({
      message: 'Delete user successfully',
    });
  });
};

export const createUser = (req, res) => {
  const contribution = new Contribution(req.body);
  contribution.save((err, data) => {
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
      message: 'Update Contribution successfully',
    });
  });
};

export const findOneContribution = async (req, res) => {
    const { contributionId } = req.params
    try {
        const result = await Contribution.findById({ _id: contributionId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay nguoi dung"
        })
    }

}