const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Admin', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ' Ad': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Soyad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Emeil: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    KullaniciAd: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Profil: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Admin',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Admin_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
