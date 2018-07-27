import { Request, Response } from "express";
import { Book } from "../models";

const welcomeController = {
    hello(req: Request, res: Response) {
        res.send("hello world");
    },
    postHello(req: Request, res: Response) {
        res.send("hello world");
    },
    findAll: (req: Request, res: Response) => {
        Book.find(req.query)
            .sort({ date: -1 })
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err));
    },

    create: (req: Request, res: Response) => {
        Book.create(req.body)
            .then((dbModel: any) => res.json(dbModel))
            .catch((err: any) => res.status(422).json(err));
    },
};

export default welcomeController;
