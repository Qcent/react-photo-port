// __tests__/Contact.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Component visability', () => {
  it('Title and Submit', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('contact-title')).toHaveTextContent('Contact me');
    expect(getByTestId('contact-button')).toHaveTextContent('Submit');
  })
});
