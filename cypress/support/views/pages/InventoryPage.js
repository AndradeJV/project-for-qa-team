/// <reference types="cypress" />


class InventoryPage {
    // Clicar no ícone de carrinho
    clickIconCart(){
        cy.get('').click();
    }

    // Acessar menu lateral
    accessSideMenu(){
        cy.get('').click();
    }

    // Mudar filtros
    changeFilters(filter){
        cy.get('').select(filter);
    }
}


export default new InventoryPage;