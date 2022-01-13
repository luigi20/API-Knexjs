const deleteUserService = require('../services/DeleteUserService');
module.exports = {
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const deleteUser = await deleteUserService.execute(id);
            return res.json(deleteUser);
        } catch (error) {
            new Error(error.message);
        }
    }
}