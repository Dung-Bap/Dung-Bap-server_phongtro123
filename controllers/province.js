const asyncHandler = require('express-async-handler');
const db = require('../models');

const getProvinces = asyncHandler(async (req, res) => {
    const response = await db.Province.findAll({ raw: true });
    return res.status(200).json({
        success: response ? true : false,
        result: response ? response : 'Something went wrong !',
    });
});

module.exports = { getProvinces };
