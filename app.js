const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Error connecting to the database:', err));
