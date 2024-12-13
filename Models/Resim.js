const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resim', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      unique: "Resim_Id_key"
    },
    Aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Resim',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Resim_Id_key",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "Resim_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};