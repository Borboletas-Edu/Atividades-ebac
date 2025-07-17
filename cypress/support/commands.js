
import inicioPage from "./pageObjects/inicioPage";
import loginPage from "./pageObjects/loginPage";

Cypress.Commands.add('fazerLogin', (email, senha) => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    inicioPage.selecionarAba('Account')
    loginPage.realizarLogin(email, senha)

});

Cypress.Commands.add('AdicionarCarrinho', (item) => {
    inicioPage.realizarBusca(item)
    inicioPage.selecionarItem()
});

Cypress.Commands.add('visitarPagina', () =>{
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
});