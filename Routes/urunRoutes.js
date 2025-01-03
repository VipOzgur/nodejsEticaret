const express = require('express');
const UrunController = require('../Controllers/urunController');
const router = express.Router();

// EJS Rotaları
router.get('/', async (req, res) => {
  const urun = await UrunController.getAllUrunDirect();
  res.render('index', { urun });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/:id/edit', async (req, res) => {
  const urun = await UrunController.getUrunByIdDirect(req.params.id);
  res.render('edit', { urun });
});

// API CRUD Rotaları
router.post('/', UrunController.createProduct);
router.put('/:id', UrunController.updateProduct);
router.delete('/:id', UrunController.deleteProduct);

module.exports = router;
