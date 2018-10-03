import React from 'react';
import { ExampleComponent } from 'react-arcgis-hub';

// example of how to pass intl to a stateless functional component
const TestIntl = props => <ExampleComponent
  intl={props.intl}
  text={props.text}
  date={Date.now()}
  number={2000} />;

export default TestIntl;
