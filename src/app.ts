import * as express from "express";

import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cors from "cors";

import * as mongoose from "mongoose";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.disable("etag");

export default app;
