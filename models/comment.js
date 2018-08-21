module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        commentUserName: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [1]
            }
        },
        commentContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
          },
    });

    
    Comment.associate = function (models) {
        Comment.belongsTo(models.Snippet, {
            foreignKey: {
                allowNull: false
            }
        });
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Comment;
};