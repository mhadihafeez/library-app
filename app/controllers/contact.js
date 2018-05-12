import Controller from '@ember/controller';
import { match, gte ,and } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  message: '',
  responseMessage:'',
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageLong: gte('message.length', 5),
  isValid: and('isValidEmail','isMessageLong'),

  actions:{
    sendMessage(){
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert(email + message);
      this.set('emailAddress', '');
      this.set('message', '');
      var form = document.getElementById('contact-form');
      form.style.display ='none';
      this.set('responseMessage','We got your message and we’ll get in touch soon');
    }
  }


});
