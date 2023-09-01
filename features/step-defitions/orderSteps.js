const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const api = require('../../api/pages');
const orderData = require('../../data/orderData');

Given('user have valid authentication', function () {

});

When('I process the order', async function () {
  processedOrder = await api.processOrder(orderData);
});

Then('the order status should be updated', function () {
  expect(processedOrder.order_status).not.toEqual(order_status);
});

Then('the last updated timestamp should be updated', function () {
  expect(processedOrder.last_updated_timestamp).toBeGreaterThan(last_updated_timestamp);
});