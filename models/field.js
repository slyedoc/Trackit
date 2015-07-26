/**
 * Created by towlesj on 7/17/2015.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    var Field = sequelize.define('Field', {

        data: DataTypes.JSONB
    }, {
        classMethods: {
            //associate: function(models) {
            //
            //}
        }
    });

    return Field;
};