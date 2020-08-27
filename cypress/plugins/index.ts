// cypress/plugins/index.ts

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginEvents) => {
  console.log(on, config);
};
