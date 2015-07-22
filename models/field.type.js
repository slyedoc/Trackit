/**
 * Created by towlesj on 7/17/2015.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var FieldType = sequelize.define("FieldType", {
        data: DataTypes.JSONB
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return FieldType;
};