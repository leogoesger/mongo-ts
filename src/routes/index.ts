const welcome = require("../controllers").welcome;

module.exports = (app: any) => {
    app.get("/api/hello", welcome.hello);
    app.post("/api/hello", welcome.postHello);
};
