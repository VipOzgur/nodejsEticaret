const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Yorum', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UrunId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Urun',
        key: 'Id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    Puan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Yorum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tarih: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Resim: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Yorum',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Yorum_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "Yorum_UserId_idx",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "Yorum_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
