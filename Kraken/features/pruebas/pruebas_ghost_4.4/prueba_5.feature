Feature: Iniciar una conversación
 
@user1 @web  
Scenario:  Prueba Crear Post Exitoso Draft.
  Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click post
  And I wait for 3 seconds
  And I click new_post
  And I wait for 3 seconds
  And I enter title_post "Pinto al oleo"
  And I wait for 2 seconds
  And I click new_description_post
  And I wait for 3 seconds
  And I enter description_post "Maestria en ingenieria de software"
  And I wait for 2 seconds  
  And I click return_new_post
  And I wait for 2 seconds  