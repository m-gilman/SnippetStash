module.exports = function (sequelize, DataTypes) {
    var Metadata = sequelize.define("Metadata", {
        tag: {
            type: DataTypes.STRING
        }
    });


    Metadata.associate = function (models) {
        Metadata.belongsTo(models.Snippet, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Metadata;
};