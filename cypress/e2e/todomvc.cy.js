/// <reference types="cypress"/>

import { TodoPage } from "../../page-objects/todo-page"

describe('todo actions', () => {
    const todoPage = new TodoPage
    
beforeEach(() => {
    
    //siteye gitmek için
    todoPage.navigate()

    //todo ekleme yapmak için
    todoPage.addTodo('Clean room')
    
})
it('should mark a todo as completed', () => {
     //ekleme işlemi yapıldığını doğruluyor
     todoPage.validateTodoTxt

     //checkbox ın seçili  olmadığını doğruluyor
     cy.get('.toggle').should('not.be.checked')
    
})
it('should clear completed todos', () => {
      //checkbox a click işlemi yapıyor
      cy.get('.toggle').click()

      //checkbox ın seçili olduğunu doğruluyor
      cy.get('.toggle').should('be.checked')
  
      //Click yaptıktan sonra metnin üzerinin çizildiğini doğruluyor
      cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  
    
})
it('should be able to complete a todo from the list', () => {
    //Clear butonuna click işlemi yapıyor
    cy.get('.clear-completed').click()
    //or
    //cy.contains('Clear completed').click()
    // veya metnin tamammını yazmanıza gerek olmadan da yapılabilir.
    //cy.contains('Clear').click()

    //todo listesinin boş olduğunu doğruluyor
    cy.get('.todo-list').should('not.have.descendants', 'li')
    
})

})

