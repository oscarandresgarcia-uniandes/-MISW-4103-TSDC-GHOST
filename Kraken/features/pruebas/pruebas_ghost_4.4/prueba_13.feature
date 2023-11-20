Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Editar pages 
  Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 2 seconds
  And I click pages
  And I wait for 1 seconds
  And I click edite_pages
  And I wait for 1 seconds
  And I enter title_pages "prueba de cambio de contenido"
  And I wait for 1 seconds
  And I click new_description_pages 
  And I wait for 1 seconds
  And I enter description_pages "exitosa"
  And I wait for 1 seconds  
  And I click update_pages
  And I wait for 4 seconds
  And I click return_new_pages
  And I wait for 3 seconds