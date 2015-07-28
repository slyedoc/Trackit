'use strict';

module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        data: DataTypes.JSONB
    }, {
        classMethods: {
            associate: function(models) {
                Item.belongsTo(models.Organization);
                Item.belongsTo(models.ItemType);
            }
        }
    });

    return Item;
};