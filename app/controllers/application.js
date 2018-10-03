import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service('intl'),

  currentProvider: null,
  isSignInModalOpen: false,

  actions: {
    signIn(provider) {
      // close the modal and show the chosen provider
      this.setProperties({
        currentProvider: provider || 'AGO',
        isSignInModalOpen: false
      });
    }
   }
});
