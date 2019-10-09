import consumer from './consumer'

export default (received_callback) => {
  return consumer.subscriptions.create({
    channel: 'OrderChannel'
  }, {
    received: function (data) {
      received_callback(data);
    },

    sendOrder: function (inputData) {
      this.perform('order_phrase', inputData)
    }
  });
}
