/// <reference types="cypress" />


class HomePage {
    // Clicar no botão [ Login ]
    clickButtonLogin(){
        cy.get('#login-button').click();
    }

    // Escrever nome do usuário
    writeUser(teste_usuarioQa) {
        cy.get('#user-name').type(teste_usuarioQa);
    }

    // Escrever senha do usuário
    writePassword(password) {
        cy.get('#password').type(password);
    }
}


export default new HomePage;