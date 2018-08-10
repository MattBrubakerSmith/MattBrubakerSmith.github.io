const Express = require('express');
const Http = require('http');
const Path = require('path');

var app = Express();

app.set("views", Path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

const siteInfo = {
    title: "Matthew Brubaker Smith - Web Developer • Graphic Designer",
    author: "Matthew Brubaker Smith"
}

app.get("/", function(req, res) {
    res.render("index", siteInfo);
});

Http.createServer(app).listen(8080);