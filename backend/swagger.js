import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./index.js'];

const doc = {
    info: {
        title: 'API de escaparate de tienda de ropa',
        description: 'Esta API permite gestionar el inventario de ropa que mostrar y el panel administrativo'
    },
    host: 'localhost:3000',
    schemes: ['http']
}

swaggerAutogen()(outputFile, endPointsFiles, doc);