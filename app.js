const express = require('express');
const bodyParser = require('body-parser');
const urunRoutes = require('./Routes/urunRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine Ayarı
app.set('view engine', 'ejs');
app.set('views', './Views');

// Static Dosyalar
app.use(express.static('public'));

// Rotalar
app.use('/urun', urunRoutes);

// Sunucu Başlatma
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
