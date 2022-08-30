/// <reference types="cypress" />


class AccountRequest {
    getUser(uuid){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('bookStoreApi')}/Account/v1/User/${uuid}`,
            failOnStatusCode: false
        });
    }

    postAuthorized(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('bookStoreApi')}/Account/v1/Authorized`,
            failOnStatusCode: false,
            body: payload
        });
    }

    postGenerateToken(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('bookStoreApi')}/Account/v1/GenerateToken`,
            failOnStatusCode: false,
            body: payload
        });
    }

    postUser(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('bookStoreApi')}/Account/v1/User`,
            failOnStatusCode: false,
            body: payload
        });
    }

    delUser(uuid){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('bookStoreApi')}/Account/v1/User/${uuid}`,
            failOnStatusCode: false
        });
    }
}


export default new AccountRequest;
