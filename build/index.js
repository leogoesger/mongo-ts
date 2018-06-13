"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var dotenv = __importStar(require("dotenv"));
var app_1 = __importDefault(require("./app"));
dotenv.config({ path: ".env" });
var port = parseInt(process.env.PORT, 10) || 8080;
app_1.default.set("port", port);
var server = http.createServer(app_1.default);
server.listen(port);
