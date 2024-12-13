const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SepetDetay', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    SepetId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'Sepet',
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
    Adet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SepetDetay',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "SepetDetay_SepetId_idx",
        fields: [
          { name: "SepetId" },
        ]
      },
      {
        name: "SepetDetay_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "SepetDetay_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
