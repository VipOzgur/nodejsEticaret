const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Teslimat', {
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
    Durum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GuncellemeTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Konum: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Teslimat',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Teslimat_SiparisId_idx",
        fields: [
          { name: "SiparisId" },
        ]
      },
      {
        name: "Teslimat_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
