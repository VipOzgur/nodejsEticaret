const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resim', {
    Id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
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
    timestamps: true,
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
