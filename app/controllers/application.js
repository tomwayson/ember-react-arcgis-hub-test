import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service('intl'),

  actions: {
    /* eslint-disable no-console */
    signIn(provider) {
      // TODO: close the modal and show the chosen provider
      // this.set('isSignInModalOpen', false);
      console.log('TODO: sign in w/', provider || 'AGO');
    }
    /* eslint-enable no-console */
  }
});
