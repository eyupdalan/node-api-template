const express = require('express');
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get('/areyoualive', (req, res) => {
    res
        .status(200)
        .send('Yes, I am alive!');
});
