'use strict';
var Sequelize = require('sequelize'); 

module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgers;
};