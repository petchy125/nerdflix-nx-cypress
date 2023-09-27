import { getGreeting } from '../support/app.po';

describe('signin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    cy.get('h1').contains('Sign In');
  });

  it('should display form and all inputs', () => {
    cy.get('form').children().should('have.length', 3);
    cy.get('input[placeholder="Email address"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains('Sign In');
  });
});

describe('Sign In Flow', () => {
  beforeEach(() => cy.visit('/'));

  it('shoud successfully sign in and navigate to  series page', () => {
    cy.get('input[placeholder="Email address"]').type('thet@mail.com');
    cy.get('input[placeholder="Password"]').type('asdf1234');
    cy.get('button').click();
    cy.get('a').contains('Series');
    cy.get('a').contains('Films');
  });
});
