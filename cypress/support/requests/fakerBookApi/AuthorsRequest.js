/// <reference types="cypress" />

class Authors {
    getAuthors() {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Authors`,
            failOnStatusCode: false
        });
    }

    getAuthorsIdBook(idBook) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Authors/authors/books/${idBook}`,
            failOnStatusCode: false
        });
    }

    getAuthorsId(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Authors/${id}`,
            failOnStatusCode: false
        });
    }

    postAuthors(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerBookApi')}/Authors`,
            failOnStatusCode: false,
            body: payload
        });
    }

    putAuthorsId(payload, id) {
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerBookApi')}/Authors/${id}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    delAuthorsId(id) {
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerBookApi')}/Authors/${id}`,
            failOnStatusCode: false
        });
    }
}

export default new Authors