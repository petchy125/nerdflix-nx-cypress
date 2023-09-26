/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import SignUp from './SignUp'; // Adjust the import path as needed

describe('SignUp Component', () => {
  it('renders the component', () => {
    mount(<SignUp />);
    cy.get('form[data-testid="sign-up"]').should('exist');
  });

  it('displays an error message for empty fields', () => {
    mount(<SignUp />);
    cy.get('form[data-testid="sign-up"]').submit();
    cy.get('div[data-testid="error"]').should('contain.text', 'Please fill in all fields.');
  });

  it('displays an error message for a short password', () => {
    mount(<SignUp />);
    cy.get('input[placeholder="Password"]').type('12345');
    cy.get('form[data-testid="sign-up"]').submit();
    cy.get('div[data-testid="error"]').should('contain.text', 'Password must be at least 6 characters long.');
  });

  it('successfully signs up a user', () => {
    const email = 'test@example.com';
    const password = 'password';
    const firstName = 'John';

    mount(<SignUp />);
    cy.get('input[placeholder="First Name"]').type(firstName);
    cy.get('input[placeholder="Email address"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('form[data-testid="sign-up"]').submit();

    // You may add assertions here for a successful sign-up, e.g., check for a redirect.
    // Ensure you have proper Firebase and NextAuth configurations for testing.
  });

  // Add more test cases as needed
});
