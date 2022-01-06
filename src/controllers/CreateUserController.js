const createUserService = require('../services/CreateUserService');
module.exports = {
    async handle(req, res, next) {
        const { username } = req.body;
        try {
            const createdUser = await createUserService.execute(username);
            return res.json(createdUser);
        } catch (error) {
            next(error);
        }

    }
}