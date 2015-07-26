'use strict';

module.exports = function(sequelize, DataTypes) {
    var ItemType = sequelize.define('ItemType', {
        created: DataTypes.DATE,
        name: DataTypes.STRING
    }, {
        classMethods: {
            //associate: function(models) {
            //   // ItemType.belongsTo(models.Organization);
            //}
        }
    });

    return ItemType;
};