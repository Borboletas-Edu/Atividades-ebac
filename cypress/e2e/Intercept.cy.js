/// <reference types = 'cypress'/>

describe('mock da API de itens populares', () => {
    
    beforeEach(() => {
        cy.visitarPagina()
    });

    it('interceptando GET e o modificando', () => {
        cy.intercept('GET', '**/public/getProducts?type=popular&limit=10&skip=0', {fixture: 'produtos.json'}).as('teste1')
        cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > ').should('have.length', 2)
    });
});


