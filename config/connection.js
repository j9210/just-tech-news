// import the sequelize constructor from the library
const Sequelize = require('sequelize');

// create connection to our database, pass in your mysql username and pw
const sequelize = new Sequelize('just_tech_news_db', 'juliaolivia.t@gmail.com', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;