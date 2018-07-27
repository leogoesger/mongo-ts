import { Router } from "express";
import { welcomeController } from "../controllers";

const welcome = Router();

welcome.route("/hello").get(welcomeController.hello);
welcome.route("/hello").post(welcomeController.postHello);
welcome.route("/book").get(welcomeController.findAll);
welcome.route("/book").post(welcomeController.create);

export default welcome;
