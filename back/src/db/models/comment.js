const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Card }) {
      this.belongTo(User, {
        foreignKey: 'id',
      })
      this.belongTo(Card, {
        foreignKey: 'id',
      })
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  })
  return Comment
}
