import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { H2 } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H2>Hello?</H2>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
