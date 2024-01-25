const { util: { formatResponse } } = require('../../helper');

const baseController = (service) => {

    const create = async (req, res, next) => {
        try {
            let { currentUser, ...request } = req.body;
            let result = await service.create(request);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const createMany = async (req, res, next) => {
        try {
            let { currentUser, ...request } = req.body;
            let result = await service.createMany(request);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const deleteById = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.deleteById(request.id);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const getAll = async (req, res, next) => {
        try {
            let result = await service.getAll();
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const getById = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.getById(request.id);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const query = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.query(request);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    const update = async (req, res, next) => {
        try {
            let { currentUser, ...request } = req.body;
            let result = await service.update(request);
            res.send(formatResponse(result));
        } catch (error) {
            next(error);
        }
    };

    return {
        create,
        createMany,

        deleteById,

        getAll,
        getById,

        query,

        update
    };
};

module.exports.baseController = baseController;