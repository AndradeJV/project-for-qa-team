/// <reference types='cypress' />


class ActivitiesRequest {
    getActivities(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Activities`,
            failOnStatusCode: false
        });
    }

    getActivitiesId(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('fakerBookApi')}/Activities/${id}`,
            failOnStatusCode: false
        });
    }

    postActivities(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('fakerBookApi')}/Activities`,
            failOnStatusCode: false,
            body: payload
        });
    }

    putActivities(id, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('fakerBookApi')}/Activities/${id}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    delActivities(id){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('fakerBookApi')}/Activities/${id}`,
            failOnStatusCode: false
        });
    }
}


export default new ActivitiesRequest;
