// collections.spec.ts
/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import Collections, { CollectionsProps } from './Collections'; // Assuming this file is in the same directory

// Mock your data as needed for testing
const mockCollections: CollectionsProps['collections'] = [
  {
    title: 'Collection 1',
    shows: [
      { id: 1, backdrop_path: 'image1.jpg', title: 'Show 1', overview: 'Overview 1' },
      { id: 2, backdrop_path: 'image2.jpg', title: 'Show 2', overview: 'Overview 2' },
    ],
  },
];

const mockSearchedResults: CollectionsProps['searchedResults'] = [];

describe('Collections Component', () => {
  beforeEach(() => {
    mount(
      <Collections collections={mockCollections} searchedResults={mockSearchedResults} />
    );
  });

  it('should render collection titles', () => {
    cy.contains('Collection 1').should('exist');
  });

  it('should render show items', () => {
    cy.get('[data-testid=item]').should('have.length', 2); // Assuming there are two shows in the collection
  });

  it('should open the modal when clicking on a show item', () => {
    cy.get('[data-testid=item]').first().click();
    cy.get('[data-testid
