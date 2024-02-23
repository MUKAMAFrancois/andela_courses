const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
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
        url: 'http://localhost:5000/',
      },
    ],
  },
  apis: ['./routers/*.js'], // path to your API documentatio
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};