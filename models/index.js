const User = require('./User');
const Post = require('./Post');

// create associations 
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});
module.exports = { User, Post };
// this file imports the user model and exports and object with it as a property