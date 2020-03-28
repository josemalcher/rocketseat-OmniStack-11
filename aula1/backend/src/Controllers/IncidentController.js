const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('indidents').select('*');
        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const[id] = await connection('indidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({id});
    }
}