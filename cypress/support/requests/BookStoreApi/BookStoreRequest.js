/// <reference types="cypress" />


class BookStoreRequest {
    getBooks(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books`,
            failOnStatusCode: false
        });
    }

    getBooks(isbn){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Book?ISBN=${isbn}`,
            failOnStatusCode: false
        });
    }

    postBooks(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books`,
            failOnStatusCode: false,
            body: payload
        });
    }

    putBook(payload, isbn){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Book?ISBN=${isbn}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    delBooks(userId){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Books?UserId=${userId}`,
            failOnStatusCode: false
        });
    }

    delBook(payload){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('bookStoreApi')}/BookStore/v1/Book`,
            failOnStatusCode: false,
            body: payload
        });
    }
}


export default new BookStoreRequest;
