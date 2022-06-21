const { check } =require ('express-validator');

exports.validateRequest = [
check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),

    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),

    check('password')
    .isLength({ min : 6})
    .withMessage('Password must be atleast 6 character long')
];