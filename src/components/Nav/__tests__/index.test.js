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

});