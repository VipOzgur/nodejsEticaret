const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kategori', {
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
    Aciklama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ResimUrl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Resim',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Kategori',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Kategori_ResimUrl_idx",
        fields: [
          { name: "ResimUrl" },
        ]
      },
      {
        name: "Kategori_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
