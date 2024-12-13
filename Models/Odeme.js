const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Odeme', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    OdemeTipi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DogrulamaKodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'IsTamamlandı': {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Odeme',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Odeme_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
