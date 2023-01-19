module.exports = (sequelize, Sequelize) => {
    // Define the model
    const version_ios = sequelize.define('version_ios', {
        id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
        },
        code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "code"
        },
        name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name"
        },
        type: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "type"
        },
        message: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "message"
        },
        createdAt:{
          type: Sequelize.DATE,
          field: 'created_at'
        },
        updatedAt:{
          type: Sequelize.DATE,
          field: 'updated_at'
        }


    })
    return version_ios
}

