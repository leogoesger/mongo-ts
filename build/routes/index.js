"use strict";
var welcome = require("../controllers").welcome;
module.exports = function (app) {
    app.get("/api/hello", welcome.hello);
    app.post("/api/hello", welcome.postHello);
    app.get("/api/book", welcome.findAll);
    app.post("/api/book", welcome.create);
};
