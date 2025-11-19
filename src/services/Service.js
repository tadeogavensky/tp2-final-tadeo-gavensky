class Service {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    return await this.dao.getAll();
  };

  getById = async (id) => {
    return await this.dao.getById(id);
  };

  create = async (data) => {
    return await this.dao.create(data);
  };

  update = async (id, newData) => {
    return await this.dao.update(id, newData);
  };

  delete = async (id) => {
    return await this.dao.delete(id);
  };
}

export default Service;
