'use strict';

module.exports = function(sequelize, DataTypes) {
    var FieldType = sequelize.define('FieldType', {
        data: DataTypes.JSONB
    }, {
        classMethods: {
            //associate: function(models) {
            //
            //}
        }
    });

    return FieldType;
};