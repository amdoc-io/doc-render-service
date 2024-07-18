const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const markdocRoutes = require('./routes/markdoc.routes');

const app = express();
const port = 8080;

app.use(cors());

app.use(bodyParser.json());

app.use("/v1", markdocRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
