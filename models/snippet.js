module.exports = function(sequelize, DataTypes) {
  var Snippet = sequelize.define("Snippet", {
    snippetTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    snippetContent: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    public :{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
  });

  Snippet.associate = function(models) {
    Snippet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Snippet.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Snippet;
};
