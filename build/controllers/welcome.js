"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    hello: function (req, res) {
        res.send("hello world");
    },
    postHello: function (req, res) {
        console.log(req.body);
    },
};
