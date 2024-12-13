const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tedarikci', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    Ad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Adres: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Logo: {
      type: DataTypes.STRING,
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
    tableName: 'Tedarikci',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Tedarikci_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
