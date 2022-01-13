const UserIndex = require('../services/UserIndexService');
module.exports = {
    async handle(req, res) {
        try {
            const result = await UserIndex.execute();
            return res.json(result);
        } catch (err) {
            next(err);
        }

    }
}