class TodoPage {

  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/')
  }

  addTodo(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
  }

  getTodos() {
    return cy.get('.todo-list li')
  }

  toggleFirst() {
    cy.get('.todo-list li')
      .first()
      .find('.toggle')
      .click()
  }

  editFirst(newText) {
    cy.get('.todo-list li')
      .first()
      .dblclick()
      .type(`${newText}{enter}`)
  }

  deleteFirst() {
    cy.get('.todo-list li')
      .first()
      .trigger('mouseover')

    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      .click({ force: true })
  }

  filter(text) {
    cy.contains('.filters a', text).click()
  }
}

export default new TodoPage()