const baseService = (repo) => {

    const create = async (request) => await repo.create(request);

    const createMany = async (items) => await repo.createMany(items);

    const deleteById = async (id) => await repo.deleteById(id);

    const deleteByObject = async (object) => await repo.deleteByObject(object);

    const deleteMany = async (objects) => await repo.deleteMany(objects);

    const getById = async (id) => await repo.getById(id);

    const getByObject = async (object) => await repo.getByObject(object);

    const getByObjects = async (objects) => await repo.getByObjects(objects);

    const getAll = async () => await repo.getAll();

    const query = async (request) => await repo.query(request);

    const scan = async (object) => await repo.scan(object);

    const update = async (request) => await repo.update(request);

    const updateMany = async (items) => await repo.updateMany(items);

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
        scan,

        update,
        updateMany
    };
};

module.exports.baseService = baseService;