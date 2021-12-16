'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ User, Dialog }) {
      this.belongsTo(Dialog, {
        foreignKey: 'id',
      })
      this.belongsTo(User, {
        foreignKey: 'id',
      })
    }
  };
  Message.init({
    text: DataTypes.TEXT,
    dialog_id: DataTypes.INTEGER,
    sender_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
