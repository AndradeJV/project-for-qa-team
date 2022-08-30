/// <reference types='cypress' />


class Books {
	getBooks(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Books`,
            failOnStatusCode: false
        })
    }

    postBooks(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerBookApi')}/Books`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getBooksId(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Books/${id}`,
            failOnStatusCode: false
        })
    }

    putBooks(id, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerBookApi')}/Books/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    deleteBooks(id){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerBookApi')}/Books/${id}`,
            failOnStatusCode: false
        })
    }
}


export default new Books
