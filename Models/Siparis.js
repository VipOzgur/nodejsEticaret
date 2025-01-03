const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Siparis', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    SiparisNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OdemeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Odeme',
        key: 'Id'
      }
    },
    SiparisTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GonderimTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Nakliye: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IslemDurumu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HataDurumu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HataMesaji: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HataKonumu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsTamamlandi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Iptal ': {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Odendi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OdemeTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Siparis',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Siparis_OdemeId_idx",
        fields: [
          { name: "OdemeId" },
        ]
      },
      {
        name: "Siparis_UserId_idx",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "Siparis_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
