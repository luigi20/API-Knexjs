const updateUserService = require('../services/UpdateUserService');
module.exports = {
    async handle(req, res, next) {
        const { username } = req.body;
        const { id } = req.params;
        try {
            const updateUser = await updateUserService.execute(username, id);
            return res.json(updateUser);
        } catch (error) {
            next(error);
        }

    }
}