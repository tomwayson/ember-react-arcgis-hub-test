import React from 'react';
import ExampleComponent from 'react-arcgis-hub';

export default class TestIntl extends React.Component {
  render() {
    return <ExampleComponent intl={this.props.intl} text={this.props.text} />;
  }
}
