let express = require('express');
let http = require('http');
let path = require('path');

var app = express();
app.use(express.static('public'));

let viewDir = path.resolve(__dirname, "views");
app.set("views", viewDir);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index", {
        page: "about"
    });
});

app.get("/:page", function(req, res) {
    let page = req.params.page.toLowerCase();

    res.render("index", {
        page: page
    });
});

http.createServer(app).listen(8080);