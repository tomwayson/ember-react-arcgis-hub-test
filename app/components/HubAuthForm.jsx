import React from 'react';
import { HubAuthButtons } from 'react-arcgis-hub';

export default class HubAuthForm extends React.Component {
  render() {
    const {
      intl,
      onSignIn
    } = this.props;
    return <div>
      <h4>{intl.t('app.welcomeToReact')}</h4>
      <HubAuthButtons intl={intl} onSignIn={onSignIn} />
    </div>;
  }
}
