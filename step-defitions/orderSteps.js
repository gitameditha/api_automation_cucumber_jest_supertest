const { Given, When, Then } = require('@cucumber/cucumber');
const api = require('../api/pages');
const orderData = require('../data/orderData');
const jsonMatcher = require('../json-matcher');

var {defineSupportCode} = require('@cucumber/cucumber');

defineSupportCode(function({Given, When, Then}) {


Given('a sample order', function () {
  // Prepare or load sample order data
  // For simplicity, let's assume orderData contains sample order
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

});