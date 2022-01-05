import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //renders Nav test
    // First Test (baseline)
    it('renders', () => {
        render(<Nav />);
    });

    // Second Test (snapshot)
    it('matches snapshot DOM node structure', () => {
        // render Nav
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });

    // Third Test (emoji)
    describe('emoji is visible', () => {
        it('inserts emoji into the h2', () => {
            // Arrange
            const { getByLabelText } = render(<Nav />);
            // Assert  
            expect(getByLabelText('camera')).toHaveTextContent('📸');
        })
    });

    // Fourth Test (links)
    describe('links are visible', () => {
        it('inserts text into the links', () => {
            // Arrange
            const { getByTestId } = render(<Nav />);
            // Assert
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
            expect(getByTestId('about')).toHaveTextContent('About me');
        });
    })

});