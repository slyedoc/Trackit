'use strict';

module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        created: DataTypes.DATE,
        data: DataTypes.JSONB
    }, {
        classMethods: {
            associate: function(models) {
                Item.belongsTo(models.Organization);
            }
        }
    });

    return Item;
};