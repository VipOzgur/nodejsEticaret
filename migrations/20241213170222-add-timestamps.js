'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tables = [
      'Admin', 'Favoriler', 'Firma', 'Iade', 'Kategori', 'Log', 'Odeme', 'Resim',
      'Sepet', 'SepetDetay', 'Siparis', 'SiparisDetay', 'Tedarikci', 'Teslimat',
      'Urun', 'UrunResim', 'User', 'UserAdress', 'Yorum'
    ];

    for (const table of tables) {
      await queryInterface.addColumn(table, 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });

      await queryInterface.addColumn(table, 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tables = [
      'Admin', 'Favoriler', 'Firma', 'Iade', 'Kategori', 'Log', 'Odeme', 'Resim',
      'Sepet', 'SepetDetay', 'Siparis', 'SiparisDetay', 'Tedarikci', 'Teslimat',
      'Urun', 'UrunResim', 'User', 'UserAdress', 'Yorum'
    ];

    for (const table of tables) {
      await queryInterface.removeColumn(table, 'createdAt');
      await queryInterface.removeColumn(table, 'updatedAt');
    }
  },
};

