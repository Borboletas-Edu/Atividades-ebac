/// <reference types = 'cypress'/>

import inicioPage from "../support/pageObjects/inicioPage";
import loginPage from "../support/pageObjects/loginPage";
import cadastroPage from "../support/pageObjects/cadastroPage";
import { faker } from '@faker-js/faker';

describe('Tela de cadastro', () => {
    
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    });

    it('Deve realizar cadastro', () => {
        let nome = `usuario${faker.person.firstName()}`
        let senha = `${faker.internet.password()}`
        inicioPage.selecionarAba('Account')
        loginPage.acessarCriarConta()
        cadastroPage.realizarCadastro(nome,faker.person.lastName(),faker.phone.number(),faker.internet.email(nome), senha, senha)
        inicioPage.selecionarAba('Account')
        cy.get('.r-14lw9ot > :nth-child(5) > .css-146c3p1').should('have.text', 'Logout')
    });

});



