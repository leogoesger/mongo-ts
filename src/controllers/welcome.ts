import { Request, Response } from "express";

module.exports = {
    hello(req: Request, res: Response) {
        res.send("hello world");
    },
    postHello(req: Request, res: Response) {
        console.log(req.body);
    },
};
