const Sequelize = require('sequelize');
const db = require('../index');

const Food = db.define('food', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageurl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Food;
