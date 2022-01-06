// __tests__/Modal.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
});
