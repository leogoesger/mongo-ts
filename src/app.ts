import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const allowed_header: string[] = [
    "http://localhost:4000",
    "http://localhost:3000",
];

const app: express.Application = express();
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowed_header.indexOf(origin as string) > -1) {
        res.header("Access-Control-Allow-Origin", origin as string);
    }
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, gutsyJwt, Accept"
    );
    next();
});

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.disable("etag");
require("./routes")(app);

export default app;
