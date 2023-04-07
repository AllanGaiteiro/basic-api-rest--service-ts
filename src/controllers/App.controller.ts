import express from 'express';

const router = express.Router({ mergeParams: true })
const AppControle = express();

/**
 * @swagger
 * tags:
 *   name: App
 *   description: Rotas para gerenciar aplicativos
 */

AppControle.use('/app', router);

/**
 * @swagger
 * /app:
 *   get:
 *     summary:  Retorna uma mensagem de Hello World!
 *     tags: [App]
 *     responses:
 *       200:
 *         description: Uma mensagem de hello world
 */

router.get('/', (req, res) => {
    res.send('Hello World!');
});


export default AppControle;