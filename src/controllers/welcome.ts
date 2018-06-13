import { Request, Response } from "express";
const db = require("../models");

module.exports = {
    hello(req: Request, res: Response) {
        res.send("hello world");
    },
    postHello(req: Request, res: Response) {
        console.log(req.body);
    },
    findAll: (req: Request, res: Response) => {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err));
    },

    create: (req: Request, res: Response) => {
        db.Book.create(req.body)
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err));
    },
};
