const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reader extends Model {}

Reader.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.INTEGER,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: "reader",
    }
);

module.exports = Reader;
