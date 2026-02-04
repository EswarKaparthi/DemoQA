export class LoginSection {
    
    loginDetails = null
    userForm = '#userForm'
    userNameBox = '#userName'
    passwordBox = '#password'
    loginButton = '#login'
    newUserButton = '#newUser'
    userNameValue = '#userName-value'
    logOutButton = '#submit'
    loggedInLabel = '#loading-label'
    
    loadLoginData() {
    return cy.fixture('loginDetails.json').then((data) => {
      this.loginDetails = data 
      return data
    })
    }

    userName(username) {
      cy.get(this.userNameBox).clear().type(username)
    }

    password(password) {
      cy.get(this.passwordBox).clear().type(password)
    }

    clickLoginButton() {
      cy.get(this.loginButton).click()
    }
    
    validLogin(username){
      cy.url().should('include', '/profile')
      cy.get(this.userNameValue).should('have.text', username)
      cy.get(this.logOutButton).should('contain.text', 'Log out')
    }

    inValidLogin(){
      cy.get(this.userForm).should('contain.text', 'Invalid username or password!')
    }

    loggedInUser(){
      cy.get(this.loggedInLabel).should('contain.text', 'You are already logged in. View your profile.')
    }
}

export const loginSection = new LoginSection()