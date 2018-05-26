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
    // We're saying that a Snippet should belong to an Author
    // A Snippet can't be created without an Author due to the foreign key constraint
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
