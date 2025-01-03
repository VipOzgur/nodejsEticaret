const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserAdress', {
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
    Ad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Telefon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'İl': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'İlce': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Mahalle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Bina: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IcKapiNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'DısKapiNo': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AdresTarifi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserAdress',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "UserAdress_UserId_idx",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "UserAdress_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
