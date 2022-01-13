const indexProjectService = require('../services/IndexProjectService');
module.exports = {
    async handle(req, res, next) {
        try {
            const { user_id } = req.query;
            const result = indexProjectService.execute(user_id);
            return res.json(result);
        }
        catch (err) {
            next(error);
        }

    }
}