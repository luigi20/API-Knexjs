const UserIndex = require('../services/UserIndexService');
module.exports = {
    async handle(req, res) {
        const result = await UserIndex.execute();
        return res.json(result);
    }
}