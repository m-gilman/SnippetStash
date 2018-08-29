module.exports = function (sequelize, DataTypes) {
    var Save = sequelize.define("Save");
    Save.associate = function (models) {
        Save.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Save.belongsTo(models.Snippet, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Save;
};
