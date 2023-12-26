const express = require('express');
const fs = require('fs');

const router = express.Router();

const getAllUsers = (req,res)=>{
    res.status(500).json({
        status: 'error',
        message:'route hasnt been established yet'
    });
};
const getUser = (req,res)=>{
    res.status(500).json({
        status: 'error',
        message:'route hasnt been established yet'
    });
};
const createUser = (req,res)=>{
    res.status(500).json({
        status: 'error',
        message:'route hasnt been established yet'
    });
};
const updateUser = (req,res)=>{
    res.status(500).json({
        status: 'error',
        message:'route hasnt been established yet'
    });
};
const deleteUser = (req,res)=>{
    res.status(500).json({
        status: 'error',
        message:'route hasnt been established yet'
    });
};

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;