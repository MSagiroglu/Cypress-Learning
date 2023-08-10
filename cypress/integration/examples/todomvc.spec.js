/// <reference types="cypress"/>

it('should be able to add a new todo to the list', () => {
    //siteye gitmek için
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    //todo ekleme yapmak için
    cy.get('.new-todo',{timeout:6000}).type("Clean room{enter}")

    //ekleme işlemi yapıldığını doğruluyor
    cy.get('label').should('have.text', 'Clean room')

    //checkbox ın seçili  olmadığını doğruluyor
    cy.get('.toggle').should('not.be.checked')

    //checkbox a click işlemi yapıyor
    cy.get('.toggle').click()

    //checkbox ın seçili olduğunu doğruluyor
    cy.get('.toggle').should('be.checked')

    //Click yaptıktan sonra metnin üzerinin çizildiğini doğruluyor
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    //Clear butonuna click işlemi yapıyor
    cy.get('.clear-completed').click()
    //or
    //cy.contains('Clear completed').click()
    // veya metnin tamammını yazmanıza gerek olmadan da yapılabilir.
    //cy.contains('Clear').click()

    //todo listesinin boş olduğunu doğruluyor
    cy.get('.todo-list').should('not.have.descendants', 'li')

})

