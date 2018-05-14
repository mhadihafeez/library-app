import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {
    sendMessage(newMessage) {
      newMessage.save().then(() => this.controller.set('responseMessage', 'We got your message and we’ll get in touch soon'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', false);
    }
  }
});
