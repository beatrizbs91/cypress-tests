import TodoPage from "../pages/TodoPage"

describe('TodoMVC React E2E', () => {

  beforeEach(() => {
    TodoPage.visit()
  })

  it('Crear tarea', () => {
    TodoPage.addTodo('Tarea 1')

    TodoPage.getTodos()
      .should('have.length', 1)
      .and('contain', 'Tarea 1')
  })

  it('Marcar tarea como completada', () => {
    TodoPage.addTodo('Tarea 2')

    TodoPage.toggleFirst()

    TodoPage.getTodos()
      .first()
      .should('have.class', 'completed')
  })

  it('Desmarcar tarea completada', () => {
    TodoPage.addTodo('Tarea 3')

    TodoPage.toggleFirst()
    TodoPage.toggleFirst()

    TodoPage.getTodos()
      .first()
      .should('not.have.class', 'completed')
  })

  it('Editar tarea', () => {
    TodoPage.addTodo('Tarea 4')

    TodoPage.editFirst('Tarea editada')

    TodoPage.getTodos()
      .first()
      .should('contain', 'Tarea editada')
  })

  it('Borrar tarea', () => {
    TodoPage.addTodo('Tarea 5')

    TodoPage.deleteFirst()

    TodoPage.getTodos()
      .should('have.length', 0)
  })

  it('Filtrar tareas', () => {
    TodoPage.addTodo('Tarea 1')
    TodoPage.addTodo('Tarea 6')

    TodoPage.toggleFirst()

    TodoPage.filter('Completed')

    TodoPage.getTodos()
      .should('have.length', 1)
      .and('contain', 'Tarea 1')

    TodoPage.filter('Active')

    TodoPage.getTodos()
      .should('have.length', 1)
      .and('contain', 'Tarea 6')

    TodoPage.filter('All')

    TodoPage.getTodos()
      .should('have.length', 2)
  })
})