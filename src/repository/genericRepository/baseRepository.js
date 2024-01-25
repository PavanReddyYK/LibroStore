const { v4: uuidv4 } = require('uuid');
const { util } = require('../../helper');

const size = 25;

const baseRepository = (model) => {

    const create = async (request) => await model.create(request);

    const createMany = async (items) => {
        let result = '';
        items = items.map(item => ({ id: util.isNullOrEmpty(item.id) ? uuidv4() : item.id, ...item }));
        for (var i = 0; i < items.length; i += size) {
            const res = await model.batchPut(items.slice(i, i + size));
            result += `${model} unprocessedItems: ${JSON.stringify(res, null, 2)}`;
        }
        return result;
    };

    const deleteById = async (id) => await model.delete({ id });

    const deleteByObject = async (object) => await model.delete(object);

    const deleteMany = async (objects) => await model.batchDelete(objects);

    const getAll = async () => await model.scan().exec();

    const getById = async (id) => await model.get({ id });

    const getByObject = async (object) => await model.query(object).exec();

    const getByObjects = async (objects, attributes) => await model.batchGet(objects, attributes ? { attributes } : {}); // [1, 2]  or [{"id": 1}, {"id": 2}] or [{"id": 1, "name": "Tim"}, {"id": 2, "name": "Charlie"}]

    const query = async (request) => {
        const { property, filter } = request;
        return await model.query(property).eq(filter).exec();
    };

    const queryLastKey = async (request) => {
        const { property, filter, lastKey } = request;
        if (lastKey) {
            return await model.query(property).eq(filter).exec();
        } else {
            return await model.query(property).eq(filter).startAt(lastKey).exec();
        }

    };

    const scan = async (object) => await model.scan(object).exec();

    const update = async (request) => {
        const { id, ...data } = request;
        return await model.update({ id }, { ...data });
    }

    const updateMany = async (items) => await model.batchPut(items);

    return {
        create,
        createMany,

        deleteById,
        deleteByObject,
        deleteMany,

        getAll,
        getById,
        getByObject,
        getByObjects,

        query,
        queryLastKey,
        scan,

        update,
        updateMany
    };
};

module.exports.baseRepository = baseRepository;