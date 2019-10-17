import consumer from './consumer'

export default (received_callback) => {
  return consumer.subscriptions.create({ channel: 'OrderChannel' }, {
    received (data) {
      received_callback(data);
    },

    sendOrder (inputData) {
      this.perform('order_phrase', inputData)
    }
  });
}
