import express from 'express';

const AppControle = express();
const port = 3000;

AppControle.get('/', (req, res) => {
    res.send('Hello World!');
});

export default AppControle;