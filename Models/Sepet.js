const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sepet', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    Durum: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sepet',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Sepet_UserId_idx",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "Sepet_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
