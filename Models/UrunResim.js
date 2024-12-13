const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UrunResim', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    UrunId: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      references: {
        model: 'Urun',
        key: 'Id'
      }
    },
    Url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UrunResim',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UrunResim_UrunId_idx",
        fields: [
          { name: "UrunId" },
        ]
      },
      {
        name: "UrunResim_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
