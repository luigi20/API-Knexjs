const createProjectService = require('../services/CreateProjectService');
module.exports = {
    async handle(req, res, next) {
        try {
            const { title, user_id } = req.body;
            const service = createProjectService.execute(title, user_id);
            return res.json(service);
        } catch (error) {
            next(error)
        }
    }
}