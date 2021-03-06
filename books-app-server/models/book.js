'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};