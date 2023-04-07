import * as bodyParser from 'body-parser';
import express, { Application, Express } from 'express';

export class App {
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
            this.app.use('/', controller);
        });
    }
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}