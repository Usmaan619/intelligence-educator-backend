class CommonService {
  /**
   * Fetch all records
   * @param {Model} model - Sequelize model
   * @returns {Promise<Array>} - List of records
   */
  async getAll(model) {
    try {
      const records = await model.findAll();
      return records;
    } catch (error) {
      throw new Error(`Error fetching records: ${error.message}`);
    }
  }

  /**
   * Fetch a single record by ID
   * @param {Model} model - Sequelize model
   * @param {number} id - Record ID
   * @returns {Promise<Object>} - Single record
   */
  async getById(model, id) {
    try {
      const record = await model.findByPk(id);
      if (!record) throw new Error("Record not found");

      return record;
    } catch (error) {
      throw new Error(`Error fetching record by ID: ${error.message}`);
    }
  }

  /**
   * Create a new record
   * @param {Model} model - Sequelize model
   * @param {Object} payload - Data for the new record
   * @returns {Promise<Object>} - Created record
   */
  async create(model, payload) {
    try {
      const newRecord = await model.create(payload);
      return newRecord;
    } catch (error) {
      throw new Error(`Error creating record: ${error.message}`);
    }
  }

  /**
   * Update an existing record by ID
   * @param {Model} model - Sequelize model
   * @param {number} id - Record ID
   * @param {Object} payload - Data to update
   * @returns {Promise<Object>} - Updated record
   */
  async update(model, id, payload) {
    try {
      const record = await model.findByPk(id);
      if (!record) throw new Error("Record not found");

      await record.update(payload);
      return record;
    } catch (error) {
      throw new Error(`Error updating record: ${error.message}`);
    }
  }

  /**
   * Delete a record by ID
   * @param {Model} model - Sequelize model
   * @param {number} id - Record ID
   * @returns {Promise<void>}
   */
  async delete(model, id) {
    try {
      const record = await model.findByPk(id);
      if (!record) throw new Error("Record not found");

      await record.destroy();
    } catch (error) {
      throw new Error(`Error deleting record: ${error.message}`);
    }
  }
}

module.exports = new CommonService();
