/**
 * Created by towlesj on 7/17/2015.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
        name: DataTypes.STRING
    }, {
        classMethods: {

        }
    });

    return Organization;
};