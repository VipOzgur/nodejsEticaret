const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Urun', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    SKU: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    KategoriId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'Kategori',
        key: 'Id'
      }
    },
    Ad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Maliyet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Perakende: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TedarikciId: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      references: {
        model: 'Tedarikci',
        key: 'Id'
      }
    },
    Stok: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Renk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Boyut: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MevcutRenkler: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MevcutBoyutlar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Indirim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Agirlik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsIndirim: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Siralama: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Not: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Urun',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Urun_KategoriId_idx",
        fields: [
          { name: "KategoriId" },
        ]
      },
      {
        name: "Urun_TedarikciId_idx",
        fields: [
          { name: "TedarikciId" },
        ]
      },
      {
        name: "Urun_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
