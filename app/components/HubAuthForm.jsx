import React from 'react';
import { HubAuthButtons } from 'react-arcgis-hub';

export default class HubAuthForm extends React.Component {
  render() {
    return <HubAuthButtons intl={this.props.intl} onSignIn={this.props.onSignIn} />;
  }
}
