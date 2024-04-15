const boom = require('@hapi/boom');
const { models } = require('./../core/db/sequelize');

class ProductionController {
    async getAllProductions() {
        try {
            const productions = await models.Production.findAll();
            return productions;
        } catch (error) {
            console.error('Error obteniendo productions:', error);
            throw boom.badImplementation('Error getting productions');
        }
    }

    async getProductionById(id) {
        try {
            const production = await models.Production.findByPk(id);
            if (!production) {
                throw boom.notFound('Producción no encontrada');
            }
            return production;
        } catch (error) {
            if (error.output.statusCode == 404) {
                throw boom.notFound('Producción no encontrada');
            } else {
                console.error(`Error obteniendo producción con ID ${id}:`, error);
                throw boom.badImplementation(`Error getting production with ID ${id}`);
            }
        }
    }

    async getProductionByCow(id) {
        try {
            const productions = await models.Production.findAll({
                where: { cow: id }
            });

            if (!productions || productions.length === 0) {
                throw boom.notFound('Producción no encontrada');
            }

            return productions;
        } catch (error) {
            if (error.output.statusCode === 404) {
                throw boom.notFound('Producción no encontrada');
            } else {
                console.error(`Error obteniendo producción para la vaca con ID ${id}:`, error);
                throw boom.badImplementation(`Error obteniendo producción para la vaca con ID ${id}`);
            }
        }
    }


    async createProduction(data) {
        try {
            const newProduction = await models.Production.create(data);
            return newProduction;
        } catch (error) {
            console.error('Error creando producción:', error);
            throw boom.badImplementation('Error creating production');
        }
    }

    async updateProduction(id, data) {
        try {
            const [updatedRowsCount, updatedProductiones] = await models.Production.update(data, {
                where: { id },
                returning: true,
            });
            if (updatedRowsCount === 0) {
                throw boom.notFound('Producción no encontrada o no hay cambios');
            }
            return updatedProductiones[0];
        } catch (error) {
            console.error(`Error actualizando producción con ID ${id}:`, error);
            throw boom.badImplementation(`Error updating production with ID ${id}`);
        }
    }

    async deleteProduction(id) {
        try {
            const deletedRowCount = await models.Production.destroy({ where: { id } });
            if (deletedRowCount === 0) {
                throw boom.notFound('Producción no encontrada');
            }
            return true;
        } catch (error) {
            console.error(`Error eliminando producción con ID ${id}:`, error);
            throw boom.badImplementation(`Error deleting production with ID ${id}`);
        }
    }
}

module.exports = ProductionController;
