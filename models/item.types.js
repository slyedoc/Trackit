'use strict';
module.exports = function(sequelize, DataTypes) {
    var ItemType = sequelize.define('ItemType', {
        name: DataTypes.STRING,
        schema: DataTypes.JSONB
    }, {
        classMethods: {
            associate: function(models) {
                ItemType.belongsTo(models.Organization);
            }
        }
    });
    return ItemType;
};