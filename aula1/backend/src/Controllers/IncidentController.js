const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;

        //verificar o tamanho dos objetos
        const [count] = await connection('indidents').count();

        const incidents = await connection('indidents')
            .join('ongs', 'ongs.id', '=', 'indidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(
                'indidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            );

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('indidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({id});
    },
    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('indidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incident.ong_id != ong_id) {
            return response.status(401).json({error: 'Operação não permitida'});
        }
        await connection('indidents').where('id', id).delete();

        return response.status(204).send();

    }

};