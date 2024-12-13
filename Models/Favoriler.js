const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Favoriler', {
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
    UrunId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'Urun',
        key: 'Id'
      }
    },
    EklenmeTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Favoriler',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Favoriler_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "Favoriler_UserId_idx",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "Favoriler_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
