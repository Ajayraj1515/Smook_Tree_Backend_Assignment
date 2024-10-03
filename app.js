const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/user.routes');
const path = require('path');

const app = express();


app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'views')));


app.use(userRoutes);


db.sequelize.sync().then(() => {
  console.log("Database synced successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
