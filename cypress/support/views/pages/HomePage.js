/// <reference types="cypress" />


class HomePage {
    // Clicar no botão [ Login ]
    clickButtonLogin(){
        cy.get('/login').click();
    }

    // Escrever nome do usuário
    writeUser(user) {
        cy.get('').type(user);
    }

    // Escrever senha do usuário
    writePassword(password) {
        cy.get('').type(password);
    }
}


export default new HomePage;