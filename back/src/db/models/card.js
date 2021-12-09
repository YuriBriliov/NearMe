const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({
      Comment, Contact, Ad, User, Category,
    }) {
      this.belongsToMany(User, {
        through: 'Rating', foreignKey: 'card_id',
      })
      this.hasMany(Comment, {
        foreignKey: 'card_id',
      })
      this.hasOne(Contact, {
        foreignKey: 'card_id',
      })
      this.hasOne(Ad, {
        foreignKey: 'card_id',
      })
      this.belongTo(Category, {
        foreignKey: 'id',
      })
      this.belongTo(User, {
        foreignKey: 'id',
      })
      this.belongTo(Contact, {
        foreignKey: 'id',
      })
    }
  }
  Card.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  })
  return Card
}
