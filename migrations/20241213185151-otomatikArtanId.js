'use strict';

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tabloları burada listeleyin
    const tables = [
      'Admin',
      'Favoriler',
      'Firma',
      'Iade',
      'Kategori',
      'Log',
      'Odeme',
      'Resim',
      'Sepet',
      'SepetDetay',
      'Siparis',
      'SiparisDetay',
      'Tedarikci',
      'Teslimat',
      'Urun',
      'UrunResim',
      'User',
      'UserAdress',
      'Yorum'
    ];

    for (const table of tables) {
      await queryInterface.changeColumn(table, 'Id', {
        type: Sequelize.INTEGER,
        primaryKey: false,
      });
      await queryInterface.changeColumn(table, 'Id', {
        autoIncrement: true,
      });
      await queryInterface.changeColumn(table, 'Id', {
        primaryKey: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Geri alma işlemi, autoIncrement özelliğini kaldırır
    const tables = [
      'Admin',
      'Favoriler',
      'Firma',
      'Iade',
      'Kategori',
      'Log',
      'Odeme',
      'Resim',
      'Sepet',
      'SepetDetay',
      'Siparis',
      'SiparisDetay',
      'Tedarikci',
      'Teslimat',
      'Urun',
      'UrunResim',
      'User',
      'UserAdress',
      'Yorum'
    ];

    for (const table of tables) {
      await queryInterface.changeColumn(table, 'id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false, // Otomatik artanı kaldır
        primaryKey: true,
      });
    }
  },
};

