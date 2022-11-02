import { LoginPage } from "../../../cypress/pages/Login"

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit("https://vue-demo.daniel-avellaneda.com/login")

    });
    it('Success admin login', () => {
        LoginPage.usernameInputElement.type("admin@admin.com");
        LoginPage.passwordInputElement.type("12345");
        LoginPage.loginBtnElement.click();

        cy.wait(2000)
        cy.url().should('contain', '/home')
    });
});