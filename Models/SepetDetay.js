const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SepetDetay', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SepetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sepet',
        key: 'Id'
      }
    },
    UrunId: {
      type: DataTypes.INTEGER,
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
    timestamps: true,
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
