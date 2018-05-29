module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        catName: {
            type: DataTypes.STRING
        }
    });
    return Category;
};