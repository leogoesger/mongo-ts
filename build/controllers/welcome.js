"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../models");
module.exports = {
    hello: function (req, res) {
        res.send("hello world");
    },
    postHello: function (req, res) {
        console.log(req.body);
    },
    findAll: function (req, res) {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then(function (dbModel) { return res.json(dbModel); })
            .catch(function (err) { return res.status(422).json(err); });
    },
    create: function (req, res) {
        db.Book.create(req.body)
            .then(function (dbModel) { return res.json(dbModel); })
            .catch(function (err) { return res.status(422).json(err); });
    },
};
