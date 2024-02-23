const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'API for testing purposes',
      license: {
        name: 'MUK',
        url: 'https://yourwebsite.com/license',
      },
      contact: {
        name: 'Test it',
        url: 'https://yourwebsite.com',
        email: 'mk.frmh3@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:7000/',
      },
    ],
  },
//   apis: ['./routers/*.ts'], // path to your API documentation
  apis:['./routers/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};