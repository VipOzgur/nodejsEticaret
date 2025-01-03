const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Firma', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Meil: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Telefon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Adres: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Firma',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Firma_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
