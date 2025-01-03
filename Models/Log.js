const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AdminId: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ActionType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ActionDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Details: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Log_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
