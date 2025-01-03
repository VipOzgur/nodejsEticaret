const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiparisDetay', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiparisId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Siparis',
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
    SiparisNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fiyat: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Indirim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Toplam: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Boyut: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Renk: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SiparisDetay',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "SiparisDetay_SiparisId_idx",
        fields: [
          { name: "SiparisId" },
        ]
      },
      {
        name: "SiparisDetay_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "SiparisDetay_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
