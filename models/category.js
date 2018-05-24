module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        catName: {
            type: DataTypes.STRING
        }
    });


    // Category.associate = function (models) {
    //     Category.belongsTo(models.Snippet, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };

    return Category;
};