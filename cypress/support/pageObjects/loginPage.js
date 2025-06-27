class loginPage{

    realizarLogin(email, senha){
        cy.get('[data-testid="email"]').type(email, {log: false})
        cy.get('[data-testid="password"]').type(senha, {log: false})
        cy.get('[data-testid="btnLogin"]').click()
    }

    acessarCriarConta(){
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    }
}
export default new loginPage()

