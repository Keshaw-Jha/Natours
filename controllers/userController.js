
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

const userHandlers = [
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
];

module.exports = userHandlers;
