import App from "./App";
import AppControle from "./controllers/App.controller";

function startApplication() {
    const app = new App([AppControle], 3000);
    app.listen();
}
startApplication();