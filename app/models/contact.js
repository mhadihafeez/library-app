import DS from 'ember-data';
import { match, gte ,and, not } from '@ember/object/computed';


export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isValidEmail: match('email', /^.+@.+\..+$/),
  isMessageLong: gte('message.length', 5),

  isValid: and('isValidEmail','isMessageLong'),
  isNotValid: not('isValid')
});
