/// <reference types='cypress' />

class CoverPhotos {
    getCoverPhotos() {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos`,
            failOnStatusCode: false
        })
    }

    postCoverPhotos(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos`,
            failOnStatusCode: false,
            body: payload
        })
    }

    getCoverPhotosIdBook(idBook) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos/books/covers/${idBook}`,
            failOnStatusCode: false
        })
    }

    getCoverPhotosId(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos/${id}`,
            failOnStatusCode: false
        })
    }

    putCoverPhotosId(payload, id) {
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos/${id}`,
            failOnStatusCode: false,
            body: payload
        })
    }

    delCoverPhotosId(id) {
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerBookApi')}/CoverPhotos/${id}`,
            failOnStatusCode: false
        })
    }
}

export default new CoverPhotos