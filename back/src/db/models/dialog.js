'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dialog extends Model {
    static associate({ Message, Card }) {
      this.hasMany(Message, {
        foreignKey: 'dialog_id',
      })
        this.belongsTo(Card, {
        foreignKey: 'id',
      })
    }
  }
  Dialog.init({
    sender_id: DataTypes.INTEGER,
    authorCard_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dialog',
  });
  return Dialog;
};
