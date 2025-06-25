class inicioPage{

    selecionarAba(nomeAba){
        cy.get(`[href="/Tab/${nomeAba}"]`).click()
    }

    realizarBusca(busca){
        cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
        cy.get('[data-testid="searchInput"]').type(busca)
    }

    acessarCarrinho(){
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
    }

    acessarFavoritos(){
        cy.get('.r-18u37iz > :nth-child(1) > .css-146c3p1').click()
    }

    selecionarItem(){
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1)').click()
        cy.get('[data-testid="addToCart"]').click()
    }
}

export default new inicioPage()