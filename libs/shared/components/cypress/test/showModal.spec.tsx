// cypress/integration/showModal.spec.tsx

import React from 'react';
import { mount } from '@cypress/react';
import ShowModal from '../../path/to/ShowModal'; // Update the path accordingly

describe('ShowModal Component', () => {
  it('renders correctly', () => {
    mount(<ShowModal show={{ id: 1, media_type: 'movie', title: 'Movie Title' }} toggleHandler={() => {}} toggle={true} />);
    cy.get('.aspect-video'); // Check for a specific element in your component
    cy.get('iframe[src*="youtube.com"]'); // Check if the YouTube iframe is present
    cy.contains('Movie Title'); // Check if the title is present
    // Add more assertions as needed
  });

  it('fetches data on mount', () => {
    cy.intercept('GET', '**/api.themoviedb.org/3/movie/1*', {
      fixture: 'movieData.json', // Create a fixture file with sample API response data
    }).as('fetchData');

    mount(<ShowModal show={{ id: 1, media_type: 'movie' }} toggleHandler={() => {}} toggle={true} />);
    cy.wait('@fetchData'); // Wait for the API request to complete
    // Add assertions to check if data is displayed correctly
  });

  it('toggles when closed', () => {
    const toggleHandler = cy.stub().as('toggleHandler');

    mount(<ShowModal show={{ id: 1, media_type: 'movie' }} toggleHandler={toggleHandler} toggle={false} />);
    cy.get('button[aria-label="Close"]').click(); // Assuming there's a close button with aria-label
    cy.get('@toggleHandler').should('be.calledWith', false);
  });
});
