const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    Ad: {
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
    Cinsiyet: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Telefon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GirisTarihi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "User_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
