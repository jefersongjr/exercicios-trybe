// title: deve ser do tipo DateType.STRING
// author: deve ser do tipo DateType.STRING
// pageQuantity: deve ser do tipo DateType.INTEGER
// createdAt: deve ser do tipo DateType.DATE
// updatedAt: deve ser do tipo DateType.DATE

const BookModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  
    return User;
  };
  
  module.exports = UserModel;