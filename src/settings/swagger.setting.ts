import path from 'path';

const controllesPath = path.join(__dirname, '../controllers/*.js')
export const options = (port: number) => ({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'A Base de uma API Rest em Typescript',
            version: '1.0.0',
            description: 'Descrição da minha API'
        },
        servers: [
            { url: `http://localhost:${port}` }
        ]
    },
    apis: [controllesPath],
});


//, { explorer: true, security: [] }