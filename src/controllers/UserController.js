const UserIndex = require('../services/UserIndex');
module.exports = {
    async index(req, res) {
        const result = await UserIndex.execute();
        return res.json(result);
    }
}