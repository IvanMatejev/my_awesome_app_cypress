class Login {
    private usernameInput = "#email";
    private passwordInput = "#password";
    private loginBtn = ".mt-5 > .v-btn > .v-btn__content"

    get usernameInputElement() {
        return cy.get(this.usernameInput);
    }

    get passwordInputElement() {
        return cy.get(this.passwordInput)
    }

    get loginBtnElement() {
        return cy.get(this.loginBtn)
    }
}

export const LoginPage = new Login();