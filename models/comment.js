module.exports = function (sequelize, DataTypes) {
    var comment = sequelize.define("comment", {
        commentTitle: {
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

    
    comment.associate = function (models) {
        comment.belongsTo(models.Snippet, {
            foreignKey: {
                allowNull: false
            }
        });
        comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return comment;
};