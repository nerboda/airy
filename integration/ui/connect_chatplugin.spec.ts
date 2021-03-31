import {
  cyChannelsChatPluginAddButton,
  cyChannelsChatPluginConnectButton,
  cyChannelsChatPluginFormNameInput,
  cyChannelsChatPluginFormSubmitButton,
  cyChannelsChatPluginList,
  cyChannelsFormBackButton,
} from 'handles';

describe('Connect chatplugin channel', () => {
  it('Connect chatplugin channel', () => {
    cy.visit('/ui/login');

    cy.get('form')
      .within(() => {
        cy.get('input[type=email]').type(Cypress.env('username'));
        cy.get('input[type=password]').type(Cypress.env('password'));
      })
      .submit();

    cy.visit('/ui/channels');
    cy.wait(500);
    cy.url().should('include', '/ui/channels');
    cy.get(`[data-cy=${cyChannelsChatPluginAddButton}]`).click();
    cy.get(`[data-cy=${cyChannelsChatPluginConnectButton}]`).click();
    cy.get(`[data-cy=${cyChannelsChatPluginFormNameInput}]`).type(Cypress.env('chatPluginName'));
    cy.get(`[data-cy=${cyChannelsChatPluginFormSubmitButton}]`).click();
    cy.url().should('include', '/ui/channels/connected');
    cy.get(`[data-cy=${cyChannelsFormBackButton}]`).click();
    cy.get(`[data-cy=${cyChannelsChatPluginList}]`).filter(`:contains("${Cypress.env('chatPluginName')}")`);
  });
});
