module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.STRING
        }
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Snippet, {foreignKey: {allowNull: false}});
        Comment.belongsTo(models.User, {foreignKey: {allowNull: false}});
    };
    return Comment;
};