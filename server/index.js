const express = require("express");
const csv = require('csv-parser');
const fs = require('fs');
const CSVToJSON = require('csvtojson');

const PORT = process.env.PORT || 3001;

const app = express();

app.post("/add-whitelist", (req, res) => {
    CSVToJSON().fromFile("./whitelist.csv")
    .then(data => {
        console.log(data)
        res.json({ message: data });

    }).catch(err => {
            console.log(err);
        }
    )
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});