import HomePage from '../../support/views/pages/HomePage'
import payload from '../../fixtures/web/logins.json'


describe('Teste de login', () => {
    context('Teste funcional positivo', function(){
        it.only('Login com sucesso', function(){
            cy.visit('/');
            
            HomePage.writeUser(payload.cold.defaultUser.username);
            HomePage.writePassword(payload.cold.defaultUser.password);
            HomePage.clickButtonLogin();
        });
    });

    context('Teste funcional negativo', function(){
        it('Tentar logar sem escrever uma senha', () => {
            cy.visit('/');

            HomePage.writeUser(payload.defaultUser.username);
            HomePage.writePassword(payload.defaultUser.password);
            HomePage.clickButtonLogin();

            cy.get('#item_4_title_link > div').should('be.visible');
        })

        it('Tentar logar sem escrever um usuário', () => {
            cy.visit('/');

            HomePage.writeUser(payload.defaultUser.username);
            HomePage.writePassword(payload.defaultUser.password);
            HomePage.clickButtonLogin();

            cy.get('#item_4_title_link > div').should('be.visible');
        })

        it('Tentar logar sem passar nenhum parâmetro', () => {
            cy.visit('/');

            HomePage.writeUser(payload.defaultUser.username);
            HomePage.writePassword(payload.defaultUser.password);
            HomePage.clickButtonLogin();

            cy.get('#item_4_title_link > div').should('be.visible');
        })
    })
});