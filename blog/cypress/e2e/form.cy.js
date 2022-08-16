describe('Post Form', () => {
  it('Visit the URL', () => {
    cy.visit('http://localhost:3000')

  })

  it('(Remove All button) must be disabled', () => {
    cy.get('form > :nth-child(8)').should('be.disabled')
  })

  it('Create a new post', () => {
    cy.get('#postTitle').type('I love pizza')
    cy.get('#postAuthor').select('2')
    cy.get('#postContent').type('I love pizza so muuuch!!')
    cy.get('form > :nth-child(7)').click()
  })

  it('Must react' , () => {
    cy.get('article > :nth-child(4)').click()
    cy.get('article > :nth-child(5)').click()
    cy.get('article > :nth-child(6)').click()
  })

  it('(Remove All button) must be enabled', () => {
    cy.get('form > :nth-child(8)').should('be.enabled')
  })

  it('Remove all posts', () => {
    cy.get('form > :nth-child(8)').click()
  })
})