const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const appPath = path.resolve(__dirname, "../Client/build/");
const fs = require('fs');
const corsOptions = {
    origin: 'http://localhost:3000', optionsSuccessStatus: 200// some legacy browsers (IE11, various SmartTVs) choke on 204}
}

app.use(express.static(path.join(appPath)));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('', (req, res) => {
    res.send({ message: 'Hello From Google Tag Manager.' });
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(appPath, 'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
