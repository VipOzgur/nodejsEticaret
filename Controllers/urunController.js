const Urun = require('../models/Urun');

// CRUD İşlemleri
const UrunController = {
  // Tüm ürünleri getir
  async getAllUrun(req, res) {
    console.log("urun sayfası");
    // try {
    //   const urun = await Urun.findAll();
    //   res.status(200).json(urun);
    // } catch (error) {
    //   res.status(500).json({ error: 'Ürünler alınırken bir hata oluştu.' });
    // }
  },

  // Tek bir ürünü getir
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const urun = await Urun.findByPk(id);

      if (!urun) {
        return res.status(404).json({ error: 'Ürün bulunamadı.' });
      }

      res.status(200).json(urun);
    } catch (error) {
      res.status(500).json({ error: 'Ürün alınırken bir hata oluştu.' });
    }
  },

  // Yeni ürün oluştur
  async createProduct(req, res) {
    try {
      const { name, price, stock } = req.body;
      const urun = await Urun.create({ name, price, stock });
      res.status(201).json(urun);
    } catch (error) {
      res.status(500).json({ error: 'Ürün oluşturulurken bir hata oluştu.' });
    }
  },

  // Ürünü güncelle
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, price, stock } = req.body;

      const urun = await Urun.findByPk(id);
      if (!urun) {
        return res.status(404).json({ error: 'Ürün bulunamadı.' });
      }

      await urun.update({ name, price, stock });
      res.status(200).json(urun);
    } catch (error) {
      res.status(500).json({ error: 'Ürün güncellenirken bir hata oluştu.' });
    }
  },

  // Ürünü sil
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      const urun = await Urun.findByPk(id);
      if (!urun) {
        return res.status(404).json({ error: 'Ürün bulunamadı.' });
      }

      await urun.destroy();
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ error: 'Ürün silinirken bir hata oluştu.' });
    }
  },
};


 //Doğrudan erişim yöntemleri
  function getAllUrunDirect() {
   return  Urun.findAll();
 }

async function getUrunByIdDirect(id) {
  return await Urun.findByPk(id);
}

module.exports = {
  ...UrunController,
  getAllUrunDirect,
  getUrunByIdDirect,
};
