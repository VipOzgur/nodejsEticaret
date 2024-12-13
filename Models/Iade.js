const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Iade', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    SiparisId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'Siparis',
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
    IadeNedeni: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Durum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tarih: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Iade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Iade_SiparisId_idx",
        fields: [
          { name: "SiparisId" },
        ]
      },
      {
        name: "Iade_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "Iade_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
