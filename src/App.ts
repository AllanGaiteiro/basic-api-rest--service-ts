
import * as bodyParser from 'body-parser';
import express from 'express';
import { Application, Express } from 'express-serve-static-core';
import swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import { options } from './settings/swagger.setting';
class App {
    public app: Application;
    public port: number;
    constructor(controllers: Express[], port: number) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares()
        this.initializeControllers(controllers)
    }
    private initializeControllers(controllers: Express[]) {
        controllers.forEach((controller) => {
            console.log(controllers)
            this.app.use('/', controller);
        });
    }
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use('/api-docs', swaggerUi.serve,
            swaggerUi.setup(swaggerJsDoc(options(this.port))));
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;