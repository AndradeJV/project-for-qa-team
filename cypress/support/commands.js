// Esperar pelo tempo X em segundos
Cypress.Commands.add('waitForTime', time => {
    return cy.wait(time * 1000);
});


