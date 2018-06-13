import * as http from "http";
import * as dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: ".env" });

const port = parseInt(process.env.PORT as string, 10) || 8080;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
