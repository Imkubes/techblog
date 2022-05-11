const User = require("./User");
const Post = require("./Post");
const Comments = require("./comments");

Comments.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comments);


User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comments };
