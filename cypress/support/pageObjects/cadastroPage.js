class cadastroPage{

    realizarCadastro(nome, sobrenome, numero, email, senha, senhaNovamente){
        cy.get('[data-testid="firstName"]').type(nome)
        cy.get('[data-testid="lastName"]').type(sobrenome)
        cy.get('[data-testid="phone"]').type(numero)
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha)
        cy.get('[data-testid="repassword"]').type(senhaNovamente)
        cy.get('[data-testid="create"]').click()
    }

    

}

export default new cadastroPage()






