const Router = require('express')
const controller = require('./authController')
const { check } = require('express-validator')
const router = new Router()
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration', [
    check('username', 'Имя пользователя не может быт пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 символов').isLength({ min: 4 })
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)

module.exports = router