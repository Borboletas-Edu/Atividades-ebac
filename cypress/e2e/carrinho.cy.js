/// <reference types = 'cypress'/>
import inicioPage from "../support/pageObjects/inicioPage";

beforeEach(() => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
  cy.visit('/')
})

describe('Carrinho de itens', () => {
  
  it('Deve adicionar produtos ao carrinho com sucesso', () => {
    cy.fixture('Usuario').then((dados) => {
      cy.fazerLogin(dados.email, dados.senha)
      cy.AdicionarCarrinho('tênis')
      cy.get('[data-testid="productName"]').should('have.text', 'tênis')

    });  
  });

  it('Deve verificar se o preço dos itens é igual a soma total do carrinho', () => {
    cy.fixture('Usuario').then((dados) => {
      cy.fazerLogin(dados.email, dados.senha)
      cy.AdicionarCarrinho('tênis')
      let valor = cy.get('[style="color: rgb(51, 144, 124); font-size: 16px; margin-right: 10px; font-family: Montserrat-SemiBold;"]')
      cy.get('.r-1mmae3n > :nth-child(2) > [data-testid="price"]').should('equal', valor)

    });
  });
});
