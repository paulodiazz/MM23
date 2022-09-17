const express = require("express");
const fs = require('fs');

// Port
const PORT = process.env.PORT || 3001;

// Initialize app
const app = express();

app.post("/add-whitelist", (req, res) => {

    // Save email and wallet from request
    var email = req.query.email;
    var wallet = req.query.wallet;

    row = '\n"' + email + '", "' + wallet + '"';

    fs.appendFileSync("./whitelist.csv", row);
    
    res.send(true);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});