const boom = require('@hapi/boom');
const { models } = require('./../core/db/sequelize');
const { sequelize, testConnection } = require('./../core/db/sequelize');

class BugsController {
    async getAllBugs() {
        try {
            const bugs = await models.Bugs.findAll();
            return bugs;
        } catch (error) {
            console.error('Error getting bugs:', error);
            throw boom.badImplementation('Error getting bugs'); // Usa boom para manejar errores
        }
    }

    async getBugById(id) {
        try {
            const bug = await models.Bugs.findByPk(id);
            if (!bug) {
                throw boom.notFound('Bug not found'); // Usa boom para manejar errores
            }
            return bug;
        } catch (error) {
            if(error.output.statusCode == 404){
                throw boom.notFound('Bug not found');
            }
            else{
                console.error(`Error getting bug with ID ${id}:`, error);
                throw boom.badImplementation(`Error getting bug with ID ${id}`); // Usa boom para manejar errores
            }
        }
    }

    async createBug(data) {
        try {
            const newBug = await models.Bugs.create(data);
            return newBug;
        } catch (error) {
            console.error('Error creating bug:', error);
            throw boom.badImplementation('Error creating bug'); // Usa boom para manejar errores
        }
    }

    async updateBug(id, data) {
        try {
            const [updatedRowsCount, updatedBugs] = await models.Bugs.update(data, {
                where: { id },
                returning: true,
            });
            if (updatedRowsCount === 0) {
                throw boom.notFound('Bug not found or no changes'); // Usa boom para manejar errores
            }
            return updatedBugs[0];
        } catch (error) {
            console.error(`Error updating bug with ID ${id}:`, error);
            throw boom.badImplementation(`Error updating bug with ID ${id}`); // Usa boom para manejar errores
        }
    }

    async deleteBug(id) {
        try {
            const deletedRowCount = await models.Bugs.destroy({ where: { id } });
            if (deletedRowCount === 0) {
                throw boom.notFound('Bug not found'); // Usa boom para manejar errores
            }
            return true;
        } catch (error) {
            console.error(`Error deleting bug with ID ${id}:`, error);
            throw boom.badImplementation(`Error deleting bug with ID ${id}`); // Usa boom para manejar errores
        }
    }
}

module.exports = BugsController;
