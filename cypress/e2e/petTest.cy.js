import pet from '../fixtures/pet.json'
import { faker } from '@faker-js/faker'

pet.id = faker.number.int()
pet.name = faker.animal.cat.name()
pet.category.id = faker.number.int(3)
pet.category.name = faker.animal.type()

  it('Create pet', () => {
    cy.request('POST', '/pet', pet).then( response => {
      cy.log(`Create pet with id: ${pet.id}`)
 
      expect(response.status).to.be.equal(200);
      expect(response.body.id).to.be.equal(pet.id);
    })
  })
