const supertest = require('supertest');
const dotenv = require('dotenv'); // Load environment variables
dotenv.config();

const apiBaseUrl = process.env.API_BASE_URL;
const api = supertest(apiBaseUrl);

async function processOrder(order) {
  const response = await api.post('/processOrder').send(order);
  return response.body;
}

module.exports = {
  processOrder,
};
