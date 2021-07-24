const express = require('express');

const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const overview = require('./routes/overviewRoutes');
const relatedProducts = require('./routes/relatedProducts');
const reviews = require('./routes/reviewsRoutes');

// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/overview', overview);
app.use('/relatedProducts', relatedProducts);
app.use('/reviews', reviews);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
